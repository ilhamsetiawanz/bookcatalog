const {
  booksAdd,
  bookGet,
  bookGetById,
  booksRemove,
  booksEdits,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: booksAdd,
  },
  {
    method: 'GET',
    path: '/books',
    handler: bookGet,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: bookGetById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: booksEdits,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: booksRemove,
  },
];

module.exports = routes;