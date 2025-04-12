/**
 * Project class where each Project has a tile and an array of TodoItem objects
 */
export class Project {
  #title;
  #todoItemArray; // Private array that holds the list of TodoItem objects

  // Constructor that takes a title argument and instantiates todoItemArray
  constructor(title) {
    this.#title = title;
    this.#todoItemArray = [];
  }

  // Getter and setter for title
  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  // Method that adds a new TodoItem to todoItemArray
  addTodoItem(todoItem) {
    this.#todoItemArray.push(todoItem);
  }

  // Method that removes a TodoItem from todoItemArray if it exists.
  // If the TodoItem does not exist, do nothing.
  removeTodoItem(todoItem) {
    const newArray = this.#todoItemArray.filter((item) => item !== todoItem);
    this.#todoItemArray = newArray;
  }

  // Getter for todoItemArray
  get toDoItemArray() {
    return this.#todoItemArray;
  }
}
