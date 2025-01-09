import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import "./Component.css";

const Component = () => {
  const navbarLinks = [
    { href: "#", text: "Home" },
    { href: "#", text: "About" },
    { href: "#", text: "Contact" },
  ];

  const cards = [
    {
      image:
        "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
      title: "Card 1",
      description: "This is the first card.",
    },
    {
      image:
        "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
      title: "Card 2",
      description: "This is the second card.",
    },
    {
      image:
        "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
      title: "Card 3",
      description: "This is the third card.",
    },
    {
        image:
          "https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=180",
        title: "Card 3",
        description: "This is the third card.",
    },
  ];

  return (
    <div>
      <Navbar links={navbarLinks} />
      <main
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Component;
