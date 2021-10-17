import React from "react";

// Components
import BookList from "./BookList";

// Context
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from "../contexts/ThemeContext";

class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    );
  }
}

export default App;
