export default showBorder = (bookList) => {
  const dataSaved = localStorage.getItem('books');
  if (dataSaved && dataSaved.includes('title')) {
    bookList.classList.add('border');
  } else {
    bookList.classList.remove('border');
  }
};
