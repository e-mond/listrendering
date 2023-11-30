import React from 'react';
import Book from './Components/Book';

const App = () => {
  const books = [
    { title: 'React Up and Running', author: 'Stoyan Stefanov', publishedYear: 2019 },
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', publishedYear: 2008 },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', publishedYear: 2011 },
  ];

  return (
    <div>
      <h1>Book List</h1>
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          publishedYear={book.publishedYear}
        />
      ))}
    </div>
  );
};

export default App;
