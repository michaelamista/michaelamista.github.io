import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout";
import HomePage from "../pages/HomePage";
import EducationPage from "../pages/EducationPage";
import ExperiencePage from "../pages/ExperiencePage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
