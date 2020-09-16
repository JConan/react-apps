import * as React from "react";
import CloseButton from "../parts/CloseButton";
import "./CityCard.scss";

export interface CityCardProps {
  name: string;
  temperature: { min: number; max: number };
  weather: { description: string; icon: string };
  onCLose: () => void;
}

const CityCard: React.SFC<CityCardProps> = (props) => {
  return (
    <article className="city-card">
      <div className="row">
        <div role="heading" className="heading">
          {props.name}
        </div>
        <CloseButton onClick={props.onCLose} />
      </div>
      <div className="row">
        <img alt={props.weather.description} src={`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`} />
      </div>
      <div className="row">
        <div aria-label="temperature max">{props.temperature.max}°</div>
        <div>|</div>
        <div aria-label="temperature min">{props.temperature.min}°</div>
      </div>
    </article>
  );
};

export default CityCard;
