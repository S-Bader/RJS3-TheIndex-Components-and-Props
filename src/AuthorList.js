import React from "react";
import AuthorCard from "./AuthorCard";

const AuthorList = props => {
  const authorList = props.authors.map(author => (
    <AuthorCard
      key={`${author.first_name} ${author.last_name}`}
      author={author}
    />
  ));
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorList}</div>
    </div>
  );
};

export default AuthorList;
