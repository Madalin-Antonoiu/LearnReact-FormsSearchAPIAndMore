import "./ImageList.css";
import React from "react";

const ListDisplay = (props) => {
  //console.log(props.images);
  const images = props.images.map(({ description, id, urls }) => (
    <img alt={description} key={id} src={urls.thumb} /> //regular, small, thumb, full, raw
  ));

  return <div className="image-list">{images}</div>;

  // Works just fine too:
  // return props.images.map(({ description, id, urls }) => (
  //   <img alt={description} key={id} src={urls.thumb} /> //regular, small, thumb, full, raw
  // ));
};

export default ListDisplay;
