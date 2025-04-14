import cube from "./images/cube.svg";
import { Project } from "./project.js";

/**
 * Add functionality to the add new project button
 */
export const addNewProjectButton = (() => {
  const button = document.getElementById("add-new-project-button");
  const formPopup = document.getElementById("form-popup");

  // Add event listener to add new project button
  button.addEventListener("click", () => {
    formPopup.style.display = "block";
  });
})();

/**
 * Popup that adds new project button based on user input and adds to project list
 */
const addNewProject = (() => {
  const projectsContainer = document.querySelector(".projects-container");
  const formPopup = document.getElementById("form-popup");
  const userInput = document.getElementById("user-input-project-title");
  const submitButton = document.getElementById("form-submit-button");
  const cancelButton = document.getElementById("form-cancel-button");

  // Take user input create new project with user input title
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Create new project with user input as title
    const newProject = new Project(userInput.value);

    // Create a new button for each new project
    const project = document.createElement("button");
    project.classList.add("project");
    project.setAttribute("id", newProject.uuid);

    // Image for project button
    const projectImg = document.createElement("img");
    projectImg.classList.add("cube-image");
    projectImg.setAttribute("src", cube);
    project.appendChild(projectImg);

    // Project title
    const projectTitle = document.createElement("p");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = newProject.title;
    project.appendChild(projectTitle);

    // TODO: add functionality to project button press that creates the project's page
    project.addEventListener("click", () => {
      console.log(newProject.uuid);
    });

    // Add new project to projects container
    projectsContainer.appendChild(project);

    // Reset user input and hide popup form
    userInput.value = "";
    formPopup.style.display = "none";
  });

  // Hide popup form and do nothing
  cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    userInput.value = "";
    formPopup.style.display = "none";
  });
})();
