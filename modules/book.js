import {
  showAwesomeBooks,
  showAddBooks,
  showContact,
} from './navigationManager.js';

import { showBorder } from './bookBorder.js';

class Books {
  constructor() {
    this.books = [];
    this.initDOMElements(); // call initDOMElements method to initialize DOM
    this.loadBooksFromLocalStorage();
    this.addForm.addEventListener('submit', this.saveFormSubmit.bind(this));
    this.listButton.addEventListener('click', showAwesomeBooks);
    this.addButton.addEventListener('click', showAddBooks);
    this.navContact.addEventListener('click', showContact);
    showAwesomeBooks();
  }

  createBookElement(book) {
    const bookContainer = document.createElement('div');
    const titleElement = document.createElement('p');
    const removeBtn = document.createElement('button');
    const title = document.createTextNode(`'${book.title}' by ${book.author}`);
    const remove = document.createTextNode('Remove');

    titleElement.appendChild(title);
    removeBtn.appendChild(remove);
    bookContainer.appendChild(titleElement);
    bookContainer.appendChild(removeBtn);

    removeBtn.addEventListener('click', () => {
      const index = this.books.indexOf(book);
      if (index === -1) {
        return;
      }

      this.removeBook(index);
      bookContainer.remove();
    });

    this.bookList.appendChild(bookContainer);
  }

  renderBookList() {
    this.books.forEach((book, index) => {
      this.createBookElement(book, index);
    });
    this.showBorder();
  }

  saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBorder();
  }

  loadBooksFromLocalStorage() {
    const dataSaved = localStorage.getItem('books');
    if (dataSaved) {
      this.books = JSON.parse(dataSaved);
      this.renderBookList();
    }
  }

  addBook(book) {
    this.books.push(book);
    this.saveBooksToLocalStorage();
    const newIndex = this.books.length - 1;
    this.createBookElement(book, newIndex);
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.showBorder();
    this.saveBooksToLocalStorage();
  }

  saveFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(this.addForm);
    const title = formData.get('title');
    const author = formData.get('author');
    const newBook = { title, author };
    this.addBook(newBook);
    this.showBorder();
    this.addForm.reset();
  }

  showBorder() {
    showBorder(this.bookList);
  }

  initDOMElements() {
    this.bookList = document.querySelector('.book-List');
    this.addForm = document.querySelector('.book-form');
    this.bar = document.querySelector('#bar');
    this.newTitle = document.querySelector('#h1-new');
    this.contactSection = document.querySelector('#contact');
    this.navContact = document.querySelector('#nav-contact');
    this.listButton = document.querySelector('#nav-list');
    this.addButton = document.querySelector('#nav-add');
    this.addTitle = document.querySelector('#h1-add');
    this.renderBookList();
  }
}

export default new Books();
