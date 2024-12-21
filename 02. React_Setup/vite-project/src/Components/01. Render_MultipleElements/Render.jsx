import React from "react";
import "./Render.css";

const Render = () => {
  // Sample data array for cards
  const cardsData = [
    {
      image: "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
      title: "Artificial Intelligence",
      description: "This is a short description about AI.",
      price: 1000,
    },
    {
      image: "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
      title: "Machine Learning",
      description: "Learn the art of machines teaching themselves.",
      price: 750,
    },
    {
      image: "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
      title: "Data Science",
      description: "Master the world of data and insights.",
      price: 1200,
    },
    {
      image: "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
      title: "Artificial Intelligence",
      description: "This is a short description about AI.",
      price: 1000,
    },
    {
      image: "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
      title: "Machine Learning",
      description: "Learn the art of machines teaching themselves.",
      price: 750,
    },
    {
      image: "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
      title: "Data Science",
      description: "Master the world of data and insights.",
      price: 1200,
    },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, Props) => (
        <div key={Props} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <h3>{card.title}</h3>
          <p className="card-description">{card.description}</p>
          <p className="card-price">${card.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Render;

