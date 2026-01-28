// src/store/slices/ProjectsSlice/projectsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../../types/Project';
import { fetchProjectById, fetchProjects as fetchProjectsAPI } from '../../../api/projects';

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null,
};

export const fetchProjectsThunk = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const projects = await fetchProjectsAPI();
      return projects;
    } catch (err) {
      return rejectWithValue('Failed to fetch projects');
    }
  },
);

export const fetchProjectByIdThunk = createAsyncThunk(
  'projects/fetchProjectById',
  async (id: string, { rejectWithValue }) => {
    try {
      const project = await fetchProjectById(id);
      return project;
    } catch (err) {
      return rejectWithValue('Failed to fetch project by id');
    }
  },
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<Project>) {
      state.projects.push(action.payload);
    },
    removeProject(state, action: PayloadAction<string>) {
      state.projects = state.projects.filter((p) => p.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectsThunk.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.projects = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjectsThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(fetchProjectByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectByIdThunk.fulfilled, (state, action: PayloadAction<Project>) => {
        state.loading = false;
        const exists = state.projects.find((p) => p.id === action.payload.id);
        if (!exists) {
          state.projects.push(action.payload);
        }
      })
      .addCase(fetchProjectByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
