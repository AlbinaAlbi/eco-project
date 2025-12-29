import { useEffect, useState } from 'react';
import { getTestData } from '../../api/api';

const HomePage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    getTestData().then(setData);
  }, []);

  return <div>{data || 'Loading...'}</div>;
};

export default HomePage;
