import React from "react";

//Functional component
const ListDisplay = (props) => {
  const images = props.images.map((image) => (
    <img alt="unsplash" src={image.urls.regular} />
  ));

  return <div>{images}</div>;
};

export default ListDisplay;
