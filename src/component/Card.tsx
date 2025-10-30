function Card({ digimon, onShow, isVisible, isMatched }) {
  const handleClick = () => {
    if (!isVisible && !isMatched) {
      onShow(digimon);
    }
  };

  return (
    <article
      className="digicard"
      onClick={handleClick}
      style={{
        backgroundColor: isMatched
          ? "lightgreen"
          : isVisible
          ? "#e0f7fa"
          : "#ff991a",
        cursor: isMatched ? "default" : "pointer",
      }}
    >
      <div
        className="digicardcontent"
        style={{ display: isVisible || isMatched ? "flex" : "none" }}
      >
        <img src={digimon.image} alt={digimon.name} />
        <h2 style={{ color: "#1971c2", fontFamily: "Zen Dots" }}>
          {digimon.name}
        </h2>
      </div>
    </article>
  );
}

export default Card;