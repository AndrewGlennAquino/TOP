/**
 * TodoItem class that generates a unique uuid with getters and setters
 */
export class TodoItem {
  #title;
  #description;
  #dueDate;
  #priority;
  #checkList;
  #uuid;

  constructor(title, description, dueDate, priority, checkList) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#checkList = checkList;
    this.#uuid = crypto.randomUUID();
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get checkList() {
    return this.#checkList;
  }

  get uuid() {
    return this.#uuid;
  }

  set title(title) {
    this.#title = title;
  }

  set description(description) {
    this.#description = description;
  }

  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  set priority(priority) {
    this.#priority = priority;
  }

  set checkList(checkList) {
    this.#checkList = checkList;
  }
}
