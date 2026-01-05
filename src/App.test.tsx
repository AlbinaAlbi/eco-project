import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthProvider } from './context/AuthContext';
import App from './App';

test('renders LoginPage on /login route', () => {
  render(
    <Provider store={store}>
      <AuthProvider>
        <MemoryRouter initialEntries={['/login']}>
          <App />
        </MemoryRouter>
      </AuthProvider>
    </Provider>,
  );

  expect(screen.getByText(/login/i)).toBeInTheDocument();
});
