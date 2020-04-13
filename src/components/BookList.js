import React from 'react';

function BookList({ books }) {
  const listElements = books.map((item) => {
    return (
      <li key={ item.id } >
        <div className="book-title">{ item.title }</div>
        <div className="book-author">{ item.author }</div>
      </li>
    );
  });
  console.log(listElements);

  return (
    <div className="book-list">
      {
        (books.length) ? (
          <ul>
            {
              listElements
            }
          </ul>
        ) : (
          <div className="empty">Nenhum livro para ler. :)</div>
        )
      }
    </div>
  );
}

export default BookList;
