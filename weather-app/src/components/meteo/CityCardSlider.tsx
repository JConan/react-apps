import * as React from "react";
import CityCard from "./CityCard";
import "./CityCardSlider.scss";

export interface CityCardSliderProps {}

const CityCardSlider: React.FunctionComponent<CityCardSliderProps> = () => {
  const [cards, setCards] = React.useState<Array<{ name: string; temperature: { min: number; max: number }; weather: { description: string; icon: string } }>>([
    { name: "France1", temperature: { max: 35, min: 22 }, weather: { description: "light rain", icon: "10d" } },
    { name: "France2", temperature: { max: 25, min: 12 }, weather: { description: "snow", icon: "13d" } },
    { name: "France3", temperature: { max: 15, min: 2 }, weather: { description: "mist", icon: "50d" } },
    { name: "France1", temperature: { max: 35, min: 22 }, weather: { description: "light rain", icon: "10d" } },
    { name: "France2", temperature: { max: 25, min: 12 }, weather: { description: "snow", icon: "13d" } },
    { name: "France3", temperature: { max: 15, min: 2 }, weather: { description: "mist", icon: "50d" } },
    { name: "France1", temperature: { max: 35, min: 22 }, weather: { description: "light rain", icon: "10d" } },
    { name: "France2", temperature: { max: 25, min: 12 }, weather: { description: "snow", icon: "13d" } },
    { name: "France3", temperature: { max: 15, min: 2 }, weather: { description: "mist", icon: "50d" } },
    { name: "France1", temperature: { max: 35, min: 22 }, weather: { description: "light rain", icon: "10d" } },
    { name: "France2", temperature: { max: 25, min: 12 }, weather: { description: "snow", icon: "13d" } },
    { name: "France3", temperature: { max: 15, min: 2 }, weather: { description: "mist", icon: "50d" } },
  ]);

  //   setCards([
  //     { name: "France1", temperature: { max: 35, min: 22 }, weather: { description: "light rain", icon: "10d" } },
  //     { name: "France2", temperature: { max: 25, min: 12 }, weather: { description: "light rain", icon: "10d" } },
  //     { name: "France3", temperature: { max: 15, min: 2 }, weather: { description: "light rain", icon: "10d" } },
  //   ]);

  return (
    <ul className="city-card-slider">
      {cards.map((card, idx) => (
        <li key={idx}>
          <CityCard
            name={card.name}
            temperature={card.temperature}
            weather={card.weather}
            onCLose={() => {
              setCards(cards.filter((c) => c !== card));
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default CityCardSlider;
