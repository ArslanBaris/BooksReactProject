import React from "react";

// Components
import Book from "./Book";

// Styles
import "./BookList.css";

// Context
import { BookContext } from "../contexts/BookContext";

class BookList extends React.Component {

  render() {

    return (
      <BookContext.Consumer>
        {(value) => {
          return (
            <section className="page-section bg-light" id="portfolio">
              <div className="container">
                <div className="text-center">
                  <h2 className="section-heading text-uppercase">BookFolio</h2>
                  <h3 className="section-subheading text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                </div>
                <div className="row">
                  {value.books.map((book, i) => {
                    return <Book book={book} key={i} />;
                  })}
                </div>
              </div>
            </section>
          )     
        }}
      </BookContext.Consumer>
    )
  }
}
export default BookList;
