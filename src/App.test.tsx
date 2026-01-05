// src/pages/LoginPage/LoginPage.test.tsx
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthContext';
import { store } from './store/store';
import { LoginPage } from './pages/LoginPage';

test('LoginPage renders without crashing', () => {
  render(
    <Provider store={store}>
      <AuthProvider>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </AuthProvider>
    </Provider>,
  );
});
