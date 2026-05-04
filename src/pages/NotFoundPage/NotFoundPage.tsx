import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>404</h1>
      <p>Page not found</p>

      <Link to="/">Go to Home</Link>
    </div>
  );
};
