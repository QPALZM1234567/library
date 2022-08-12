let myLibrary = [];
const body = document.querySelector('body');

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

const add = document.querySelector('#add');
add.addEventListener('click', () => {
    let background = document.createElement('div');
    background.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    background.style.position = "absolute";
    background.style.top = "0";
    background.style.left = "0";
    background.style.width = "100%";
    background.style.height = "100%";
    background.style.display = "flex";
    background.style.justifyContent = "center";
    background.style.alignItems = "center";

    let form = document.createElement('form');
    form.setAttribute("action", "script.js");
    form.setAttribute("method", "post");

    let label = document.createElement('label');
    label.setAttribute("for", "title");
    label.textContent = "Title: ";
    let input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "title");
    input.setAttribute("name", "title");
    form.appendChild(label);
    form.appendChild(input);


    background.appendChild(form);
    body.appendChild(background);

});

addBookToLibrary('Biography', 'Sean Jung', 197, true);
addBookToLibrary('Biography', 'Sean Jung', 197, true);
addBookToLibrary('Biography', 'Sean Jung', 197, true);
addBookToLibrary('Biography', 'Sean Jung', 197, true);

displayBooks();
console.log(myLibrary);