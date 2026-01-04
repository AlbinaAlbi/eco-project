import { Routes, Route, Link } from "react-router-dom";
import { ProjectsList } from "./ProjectsList";
import { ProjectEdit } from "./ProjectEdit";

export const DashboardPage = () => {
  return (
    <div>
      <h1>Личный кабинет</h1>
      <nav>
        <Link to="projects">Мои проекты</Link>
        {/* можно добавить другие ссылки: мои донаты, инициативы */}
      </nav>

      <Routes>
        <Route path="projects" element={<ProjectsList />} />
        <Route path="projects/:id/edit" element={<ProjectEdit />} />
      </Routes>
    </div>
  );
};
