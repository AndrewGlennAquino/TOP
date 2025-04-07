const container = document.querySelector(".container"); // Container for all Book cards

/**
 * Book constructor where each book has a randomUUID
 *
 * @param {string} title
 * @param {string} author
 * @param {boolean} hasRead
 */
function Book(title, author, hasRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.hasRead = hasRead;
}

/**
 * Function that takes a Book as an argument, then appends a new Book card to container
 *
 * @param {Book} book
 * @returns New Book card
 */
function createBookCard(book) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", book.id);

  let title = document.createElement("p");
  title.classList.add("title");
  title.textContent = book.title;

  let author = document.createElement("p");
  author.classList.add("author");
  author.textContent = book.author;

  // If a book is read, font color is green. Otherwise, font color is red.
  let hasRead = document.createElement("p");
  hasRead.classList.add("has-read");
  if (book.hasRead) {
    hasRead.textContent = "Have read!";
    hasRead.style.color = "rgb(0, 200, 0)";
  } else {
    hasRead.textContent = "Have not read!";
    hasRead.style.color = "rgb(200, 0, 0)";
  }

  // Change the status of book.hasRead on button click
  let readButton = document.createElement("button");
  readButton.classList.add("card-button");
  readButton.textContent = "I Read This!";
  readButton.addEventListener("click", () => {
    book.hasRead = !book.hasRead;

    if (book.hasRead) {
      hasRead.textContent = "Have read!";
      hasRead.style.color = "rgb(0, 200, 0)";
    } else {
      hasRead.textContent = "Have not read!";
      hasRead.style.color = "rgb(200, 0, 0)";
    }
  });

  // Removes card from DOM on click
  let removeButton = document.createElement("button");
  removeButton.classList.add("card-button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    const element = document.getElementById(book.id);
    container.removeChild(element);
  });

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(hasRead);
  card.appendChild(readButton);
  card.appendChild(removeButton);

  return card;
}

// Elements from dialog element and form element
const newBookButton = document.getElementById("new-book-button");
const newBookDialog = document.getElementById("new-book-dialog");
const newBookTitle = document.getElementById("new-book-title");
const newBookAuthor = document.getElementById("new-book-author");
const addNewBookButton = document.getElementById("add-new-book-button");
const cancelNewBookButton = document.getElementById("cancel-new-book-button");

/**
 * Open dialog box for user to enter title and author information
 */
newBookButton.addEventListener("click", () => {
  newBookDialog.showModal();
});

/**
 * Creates new Book card on click with provided user information
 */
addNewBookButton.addEventListener("click", (event) => {
  let title;
  let author;

  event.preventDefault();
  title = newBookTitle.value;
  author = newBookAuthor.value;

  let newBook = new Book(title, author, false);
  container.appendChild(createBookCard(newBook));
  newBookDialog.close();
});

/**
 * Close dialog box without taking an action
 */
cancelNewBookButton.addEventListener("click", (event) => {
  event.preventDefault();
  newBookDialog.close();
});