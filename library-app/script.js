/**
 * TODO: create logic for adding new book
 */
const newBookButton = document.getElementById("new-book-button");

newBookButton.addEventListener("click", (event) => {
  console.log("\"New Book\" Button");
});

/**
 * Create a new book card that includes: title, author, and whether the user has read the book or not. 
 * Then append new book card to container.
 */
const container = document.querySelector(".container");

// TODO: exchange loop end with number of books in books array
for (let i = 0; i < 5; i++) {
  let card = document.createElement("div");
  card.classList.add("card");

  let title = document.createElement("p");
  title.classList.add("title");
  title.textContent = "Title";

  let author = document.createElement("p");
  author.classList.add("author");
  author.textContent = "Author";

  // If a book is read, font color is green. Otherwise, font color is red.
  let read = document.createElement("p");
  read.classList.add("has-read");
  let hasRead = true;
  if (hasRead) {
    read.textContent = "Have read!";
    read.style.color = "rgb(0, 200, 0)";
  } else {
    read.textContent = "Have not read!";
    read.style.color = "rgb(200, 0, 0)";
  }

  // TODO: create logic to change hasRead status if user clicks button
  let readButton = document.createElement("button");
  readButton.classList.add("read-button");
  readButton.textContent = "I read this!"
  readButton.addEventListener("click", (event) => {
    console.log("\"I read this!\" button");
  });

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(read);
  card.appendChild(readButton);

  container.appendChild(card);
}
