const myLibrary = []; // array of all books
const container = document.querySelector(".container"); // container for all Book cards

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
 * Function that takes a Book as an argument, then returns a new Book card
 *
 * @param {Book} book
 */
function createBookCard(book) {
  let card = document.createElement("div");
  card.classList.add("card", book.id);

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

  // TODO: create logic to change hasRead status if user clicks button
  let readButton = document.createElement("button");
  readButton.classList.add("card-button", book.id);
  readButton.textContent = "I read this!";
  readButton.addEventListener("click", (event) => {
    console.log('"I read this!" button');
  });

  // TODO: create logic to remove book
  let removeButton = document.createElement("button");
  removeButton.classList.add("card-button", book.id);
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", (event) => {
    console.log('"Remove" button');
  });

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(hasRead);
  card.appendChild(readButton);
  card.appendChild(removeButton);

  container.appendChild(card);
}

/**
 * TODO: create logic for adding new book
 */
const newBookButton = document.getElementById("new-book-button");

newBookButton.addEventListener("click", (event) => {
  // TODO: remove test book
  const testBook = new Book("Title", "Author", true);
  createBookCard(testBook);
});
