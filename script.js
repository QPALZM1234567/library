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
    background.addEventListener('click', () => {
        body.removeChild(body.lastElementChild);
    });

    let form = document.createElement('form');
    form.setAttribute("action", "script.js");
    form.setAttribute("method", "post");
    form.setAttribute("onclick", "event.stopPropagation()");

    let label = document.createElement('label');
    label.setAttribute("for", "title");
    label.textContent = "Title: ";
    let input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "title");
    input.setAttribute("name", "title");
    form.appendChild(label);
    form.appendChild(input);

    label = document.createElement('label');
    label.setAttribute("for", "author");
    label.textContent = "Author: ";
    input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "author");
    input.setAttribute("name", "author");
    form.appendChild(label);
    form.appendChild(input);

    label = document.createElement('label');
    label.setAttribute("for", "pages");
    label.textContent = "Pages: ";
    input = document.createElement('input');
    input.setAttribute("type", "number");
    input.setAttribute("id", "pages");
    input.setAttribute("name", "pages");
    form.appendChild(label);
    form.appendChild(input);

    label = document.createElement('label');
    label.setAttribute("for", "read");
    label.textContent = "Read: ";
    input = document.createElement('select');
    input.setAttribute("id", "read");
    input.setAttribute("name", "read");
    
    let option = document.createElement('option');
    option.setAttribute('value', 'true');
    option.textContent = 'Yes';
    input.appendChild(option);

    let option2 = document.createElement('option');
    option2.setAttribute('value', 'false');
    option2.textContent = 'No';
    input.appendChild(option2);

    form.appendChild(label);
    form.appendChild(input);

    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Submit';
    form.appendChild(button);


    background.appendChild(form);
    body.appendChild(background);

});

addBookToLibrary('Biography', 'Sean Jung', 197, true);
addBookToLibrary('Biography', 'Sean Jung', 197, true);
addBookToLibrary('Biography', 'Sean Jung', 197, true);
addBookToLibrary('Biography', 'Sean Jung', 197, true);

displayBooks();
console.log(myLibrary);