document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('load-projects').addEventListener('click', fetchProjects);
});

async function fetchProjects() {
  const response = await fetch('/api/projects');
  const projects = await response.json();
  displayProjects(projects);
}

function displayProjects(projects) {
  const container = document.getElementById('project-container');
  container.innerHTML = ''; // Clear previous projects
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.name}">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(projectElement);
  });
}
