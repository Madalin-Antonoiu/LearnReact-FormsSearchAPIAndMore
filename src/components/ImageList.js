import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ListDisplay = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />; //regular, small, thumb, full, raw
  });

  return <div className="image-list">{images}</div>;
};

export default ListDisplay;
