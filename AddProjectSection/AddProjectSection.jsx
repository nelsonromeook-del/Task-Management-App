import ProjectForm from "./ProjectForm";

function AddProjectSection({ onAddProject }) {
  return (
    <section className="add-project-section">
      <h2>Add Project</h2>
      <ProjectForm onAddProject={onAddProject} />
    </section>
  );
}

export default AddProjectSection;
