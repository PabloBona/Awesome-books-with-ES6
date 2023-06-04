export function showAwesomeBooks() {
  const addForm = document.querySelector('.book-form');
  const bar = document.querySelector('#bar');
  const newTitle = document.querySelector('#h1-new');
  const contactSection = document.querySelector('#contact');
  const bookList = document.querySelector('.book-List');
  const addTitle = document.querySelector('#h1-add');

  addForm.classList.add('hidden');
  bar.classList.add('hidden');
  newTitle.classList.add('hidden');
  contactSection.classList.add('hidden');
  bookList.classList.remove('hidden');
  addTitle.classList.remove('hidden');
}

export function showAddBooks() {
  const bookList = document.querySelector('.book-List');
  const bar = document.querySelector('#bar');
  const addTitle = document.querySelector('#h1-add');
  const addForm = document.querySelector('.book-form');
  const contactSection = document.querySelector('#contact');
  const newTitle = document.querySelector('#h1-new');

  bookList.classList.add('hidden');
  bar.classList.add('hidden');
  addTitle.classList.add('hidden');
  addForm.classList.remove('hidden');
  contactSection.classList.add('hidden');
  newTitle.classList.remove('hidden');
}

export function showContact() {
  const bookList = document.querySelector('.book-List');
  const addTitle = document.querySelector('#h1-add');
  const addForm = document.querySelector('.book-form');
  const bar = document.querySelector('#bar');
  const newTitle = document.querySelector('#h1-new');
  const contactSection = document.querySelector('#contact');

  bookList.classList.add('hidden');
  addTitle.classList.add('hidden');
  addForm.classList.add('hidden');
  bar.classList.add('hidden');
  newTitle.classList.add('hidden');
  contactSection.classList.remove('hidden');
}
