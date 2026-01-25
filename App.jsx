import { useState } from "react";
import Header from "./Header/Header";
import AddProjectSection from "./AddProjectSection/AddProjectSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <AddProjectSection onAddProject={addProject} />
      <ProjectSection
        projects={filteredProjects}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;
