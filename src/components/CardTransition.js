import "./styles.css";
import { useRef, useState } from "react";

export default function CardTransition() {
  const cardRef = useRef();
  const [cardData, setCardData] = useState(1);
  
  const next = () => {
    cardRef.current.style.opacity = 0;
    setTimeout(() => {
      setCardData(cardData + 1);
      cardRef.current.style.opacity = 1;
    }, 1000);
  };

  return (
    <div className="Card-Transition">
      <div
        ref={cardRef}
        className="card"
        style={{
          border: "1px solid black",
          padding: "8px",
          transition: "opacity 1s linear"
        }}
      >
        <p>Image {cardData}</p>
      </div>
      <div>
        <button style={{ width: "50px" }} onClick={next}>
          next
        </button>
      </div>
    </div>
  );
}
