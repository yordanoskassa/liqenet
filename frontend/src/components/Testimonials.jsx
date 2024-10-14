// Testimonials.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css"; // Import the custom CSS

// Importing images from the assets folder
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";

const testimonialList = [
  [
    {
      photo: image5, // Using the imported image
      name: "Aster Tesfaye",
      rating: 5.0,
      content:
        '"My son, Eyuel, started using this site a few months ago, and he’s already saying simple sentences in Amharic! He’s always excited to show us new words he learned, and we even communicate in Amharic now at home. The lessons are fun, and he loves the interactive games. It’s the perfect way for him to connect with his culture!"',
    },
    {
      photo: image6, // Using the imported image
      name: "Temesgen Ashenafi",
      rating: 4.9,
      content:
        'Loza has tried other language apps before, but this one is her favorite. The lessons are easy to follow, and she enjoys the stories in Amharic. She’s even teaching us new words! Now we can have little conversations in Amharic, and she feels proud of what she’s learning. I just wish they had more songs, but overall, it’s a fantastic site!',
    },
  ],
  [
    {
      photo: image7, // Using the imported image
      name: "Tola Debebe",
      rating: 5,
      content:
        'The best way for my son to learn Amharic! I was looking for a way to teach my son, Dawit, Amharic, and this site has been perfect! He learns at his own pace and enjoys the activities. It’s amazing how quickly he picked up basic greetings, and now we’re having small chats in Amharic at home. ',
    },
    {
      photo: image8, // Using the imported image
      name: "Fekadu Girma",
      rating: 3.5,
      content:
        'It’s so exciting to hear my daughter use Amharic words when we talk. The lessons are well-organized, and the games make learning fun. We now communicate in Amharic more often, and it feels great to share our culture with her!',
    },
  ],
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => {
          const index = i + 1;
          if (index <= Math.floor(rating)) {
            return <FontAwesomeIcon key={i} icon={faStar} className="star-icon full" />;
          } else if (rating > i && rating < index) {
            return <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="star-icon half" />;
          } else {
            return <FontAwesomeIcon key={i} icon={faStar} className="star-icon empty" />;
          }
        })}
      </div>
    );
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>What The Parents Say</h2>
          <p>See what our satisfied clients have to say about their experiences with us.</p>
        </div>

        <div className="testimonial-grid">
          {testimonialList[index].map((item, i) => (
            <div key={i} className="testimonial-card">
              <div className="card-header">
                <img src={item.photo} alt={item.name} className="testimonial-photo" />
                <div className="testimonial-info">
                  <h5 className="testimonial-name">{item.name}</h5>
                  {renderStars(item.rating)}
                </div>
              </div>
              <p className="testimonial-content">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="testimonial-controls">
          <button className="control-btn" onClick={() => handleControl("prev")}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="control-btn" onClick={() => handleControl("next")}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
