import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.containerContentPadding}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
