import BooksClass from './modules/book.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';

const books = new BooksClass();
books.init();
// DATE AND TIMEOUT_ERR
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('current_date').innerText = now;
