import { Routes, Route } from 'react-router-dom';
import './index';

import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AppErrorHandler } from './pages/AppErrorHandler';
import { ProjectsPage } from './pages/ProjectsPage';
import { Contacts } from './pages/Contacts';
import { AboutUs } from './pages/AboutUs';
import { Sidebar } from './components/Sidebar';
import { HelpNow } from './pages/HelpNow';

function App() {
  return (
    <>
      <AppErrorHandler />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/help" element={<HelpNow />} />
          <Route path="/volunteer" element={<HelpNow />} />
          <Route path="/donate" element={<HelpNow />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
