import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';

import Header from './components/Header';
import BookList from './components/BookList';

function App() {
  const [ books, setBooks ] = useState([
    { id: uuid(), title: 'Origens da Fundação', author: 'Isaac Asimov' },
    { id: uuid(), title: 'Prelúdio à Fundação', author: 'Isaac Asimov' },
  ]);

  return (
    <div className="app">
      <Header number={ books.length } />
      <BookList books={ books } />
    </div>
  );
}

export default App;
