import { books } from './modules/book.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

// DATE AND TIMEOUT_ERR
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('current_date').innerText = now;
