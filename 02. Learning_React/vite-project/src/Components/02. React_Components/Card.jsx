import React from "react";

function Card({ image, title, description }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "15px",
      margin: "10px",
      maxWidth: "300px",
    }}>
      <img src={image} alt={title} style={{ width: "100%", borderRadius: "5px" }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;

