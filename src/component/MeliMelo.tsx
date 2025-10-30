import { useState, useEffect } from "react";
import Card from "./Card";

function MeliMelo({ digimon }) {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const duplicated = [...digimon, ...digimon].map((card, index) => ({
      ...card,
      id: `${card.name}-${index}`,
    }));
    const shuffled = duplicated.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, [digimon]);

  const handleSelect = (card) => {
    if (selected.length === 2 || visibleCards.includes(card.id)) return;

    const newSelected = [...selected, card];
    setSelected(newSelected);
    setVisibleCards((prev) => [...prev, card.id]);

    if (newSelected.length === 2) {
      const [a, b] = newSelected;
      if (a.name === b.name) {
        setMatchedCards((prev) => [...prev, a.id, b.id]);
        setSelected([]);
      } else {
        setTimeout(() => {
          setVisibleCards((prev) =>
            prev.filter((id) => id !== a.id && id !== b.id)
          );
          setSelected([]);
        }, 1000);
      }
    }
  };

  const allMatched = matchedCards.length === digimon.length * 2;

  return (
    <>
    {allMatched && (
      <div className="victory-message">
        🎉 Bravo ! Toutes les paires sont trouvées !
      </div>
    )}
        <section className="melimelo">
        {cards.map((card) => (
            <Card
            key={card.id}
            digimon={card}
            onShow={handleSelect}
            isVisible={visibleCards.includes(card.id)}
            isMatched={matchedCards.includes(card.id)}
            />
        ))}
        </section>
    </>
  );
}

export default MeliMelo;
