import projectsReducer, { addProject, removeProject } from './projectsSlice';

describe('projectsSlice', () => {
  const project1 = {
    id: '1',
    title: 'Eco Park Cleanup',
    shortDescription: 'A project to clean up local parks and plant new trees.',
    imageUrl: 'https://example.com/images/eco-park.jpg',
    city: 'Kyiv',
    goalAmount: 5000,
    currentAmount: 1200,
    status: 'active',
  };

  const project2 = {
    id: '2',
    title: 'Solar Energy for Schools',
    shortDescription: 'Installing solar panels in schools to promote renewable energy.',
    imageUrl: 'https://example.com/images/solar-school.jpg',
    city: 'Lviv',
    goalAmount: 15000,
    currentAmount: 8000,
    status: 'active',
  };

  test('should return initial state', () => {
    const state = projectsReducer(undefined, { type: 'unknown' });

    expect(state.projects).toEqual([]);
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
