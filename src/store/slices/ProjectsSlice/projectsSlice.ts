// src/store/slices/ProjectsSlice/projectsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchProjectById, fetchProjects as fetchProjectsAPI } from '../../../api/project';
import { Project } from '../../../types/Project';

interface ProjectsState {
  projects: Project[];
  currentProject: Project | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [],
  currentProject: null,
  loading: false,
  error: null,
};

export const fetchProjectsThunk = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const projects = await fetchProjectsAPI();
      return projects;
    } catch {
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
    } catch {
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
      state.projects = state.projects.filter((p) => String(p.id) !== action.payload);
    },
    clearCurrentProject(state) {
      state.currentProject = null;
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
        state.currentProject = null;
      })
      .addCase(fetchProjectByIdThunk.fulfilled, (state, action: PayloadAction<Project>) => {
        state.currentProject = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjectByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addProject, removeProject, clearCurrentProject } = projectsSlice.actions;
export default projectsSlice.reducer;
