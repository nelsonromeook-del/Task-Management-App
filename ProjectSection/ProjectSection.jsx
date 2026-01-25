import SearchBar from "./SearchBar";
import ProjectList from "./ProjectList/ProjectList";

function ProjectSection({ projects, searchTerm, setSearchTerm }) {
  return (
    <section>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList projects={projects} />
    </section>
  );
}

export default ProjectSection;
