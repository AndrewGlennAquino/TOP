/**
 * ProjectList class that creates an array of Project objects that can be added or removed
 */
export class ProjectList {
  #projectList; // Private array that holds list of Project objects

  // No argument constructor that instantiates projectList
  constructor() {
    this.#projectList = [];
  }

  // Method that adds a Project to projectList
  addProject(project) {
    this.#projectList.push(project);
  }

  // Method that removes a Project from projectList if it exists.
  // If the Project does not exist, do nothing.
  removeProject(project) {
    const newArray = this.#projectList.filter((item) => item !== project);
    this.#projectList = newArray;
  }

  // Getter for projectList
  get projectList() {
    return this.#projectList;
  }
}
