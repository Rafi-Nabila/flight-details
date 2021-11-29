import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { ImAirplane } from "react-icons/im";
import { IconContext } from "react-icons/lib";
import { TimeConvert } from "../../helper";

import STYLES from "./Card.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const Card = ({ data }) => {

  const returnCard = () => {
    return data.legs.map((l, index) => {
      return (
        <div className={getClassName("Card__wrapper")} key={index}>
          <div className={getClassName("Card__leg-wrapper")}>
            <div className={getClassName("Card__plane-icon")}>
              <ImAirplane />
            </div>
            {/* starting time and airport */}
            <div className={getClassName("Card__leg")}>
              <p>{l.arrival_time}</p>
              <p>{l.arrival_airport}</p>
            </div>

            {/* arrow icon */}
            <IconContext.Provider value={{ color: "#909090", size: "20px" }}>
              <div className={getClassName("Card__right_arrow")}>
                <IoMdArrowRoundForward />
              </div>
            </IconContext.Provider>

            {/* depature time and airport */}
            <div className={getClassName("Card__leg")}>
              <p>{l.departure_time}</p>
              <p>{l.departure_airport}</p>
            </div>
          </div>
          <div className={getClassName("Card__duration")}>
            <p>{l.duration}</p>
            <p>{l.stops}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={getClassName("Card")}>
      {returnCard()}
      <div className={getClassName("Card__card-footer")}>
        <div>
          <p>{data.price}</p>
          <p>{data.agent}</p>
        </div>
        <button className={getClassName("Card__select-btn")}>Select</button>
      </div>
    </div>
  );
};

export default Card;
