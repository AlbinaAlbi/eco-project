// src/store/slices/ProjectsSlice/projectsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../../types/Project';
import { fetchProjects as fetchProjectsAPI } from '../../../api/projects';

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
      });
  },
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
