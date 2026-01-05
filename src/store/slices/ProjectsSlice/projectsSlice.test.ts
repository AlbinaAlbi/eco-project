import projectsReducer, { setProjects, addProject, removeProject } from './projectsSlice';

describe('projectsSlice', () => {
  const project1 = {
    id: '1',
    title: 'Eco Project 1',
  };

  const project2 = {
    id: '2',
    title: 'Eco Project 2',
  };

  test('should return initial state', () => {
    const state = projectsReducer(undefined, { type: 'unknown' });

    expect(state.projects).toEqual([]);
  });

  test('should handle setProjects', () => {
    const state = projectsReducer({ projects: [] }, setProjects([project1, project2]));

    expect(state.projects.length).toBe(2);
    expect(state.projects[0].title).toBe('Eco Project 1');
  });

  test('should handle addProject', () => {
    const state = projectsReducer({ projects: [project1] }, addProject(project2));

    expect(state.projects.length).toBe(2);
    expect(state.projects[1].id).toBe('2');
  });

  test('should handle removeProject', () => {
    const state = projectsReducer({ projects: [project1, project2] }, removeProject('1'));

    expect(state.projects.length).toBe(1);
    expect(state.projects[0].id).toBe('2');
  });
});
