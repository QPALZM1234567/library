let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}


const books = document.querySelector(".books");
function displayBooks() {
    let button = books.removeChild(books.lastElementChild);
    for (let book of myLibrary) {
        let temp = document.createElement('div');
        temp.classList.add('book');

        let title = document.createElement('h1');
        title.textContent = "Title: " + book.title;
        temp.appendChild(title);
        
        let author = document.createElement('h2');
        author.textContent = "Author: " + book.author;
        temp.appendChild(author);

        let pages = document.createElement('p');
        pages.textContent = "Pages: " + book.pages;
        temp.appendChild(pages);

        let read = document.createElement('p');
        read.textContent = "Read: " + book.read;
        temp.appendChild(read);
        books.appendChild(temp);
    }
    books.appendChild(button);
}

addBookToLibrary('Biography', 'Sean Jung', 197, true);
addBookToLibrary('Biography', 'Sean Jung', 197, true);
addBookToLibrary('Biography', 'Sean Jung', 197, true);
addBookToLibrary('Biography', 'Sean Jung', 197, true);

displayBooks();
console.log(myLibrary);