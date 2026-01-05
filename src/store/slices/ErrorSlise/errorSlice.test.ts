import errorReducer, { setError, clearError } from './errorSlice';

describe('errorSlice', () => {
  test('should return initial state', () => {
    const state = errorReducer(undefined, { type: 'unknown' });

    expect(state.message).toBeNull();
  });

  test('should handle setError', () => {
    const errorMessage = 'Something went wrong';

    const state = errorReducer({ message: null }, setError(errorMessage));

    expect(state.message).toBe(errorMessage);
  });

  test('should handle clearError', () => {
    const state = errorReducer({ message: 'Error' }, clearError());

    expect(state.message).toBeNull();
  });
});
