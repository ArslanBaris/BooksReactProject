import React from "react";

// Components
import BookList from "./BookList";

// Context
import BookContextProvider from '../contexts/BookContext'

class App extends React.Component {
  render() {
    return <div>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </div>
    
  }
}

export default App;
