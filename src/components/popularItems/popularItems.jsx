import React, { useEffect, useRef, useState } from "react";
import "./popularItems.css";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import itemPhoto from "../../images/itemPhoto.svg";

const PopularItems = () => {
  const itemsRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [limit, setLimit] = useState("left");

  useEffect(() => {
    itemsRef.current.scrollLeft = scrollLeft;
    handleScroll(0);
  }, [scrollLeft]);

  const handleScroll = (scrollOffset) => {
    if (scrollLeft === 600) {
      setLimit("right");
      if (scrollOffset === -200) {
        const newScrollLeft = scrollLeft + scrollOffset;
        setScrollLeft(newScrollLeft);
        setLimit(null);
      }
    } else if (scrollLeft === 0) {
      setLimit("left");
      if (scrollOffset === 200) {
        const newScrollLeft = scrollLeft + scrollOffset;
        setScrollLeft(newScrollLeft);
        setLimit(null);
      }
    } else if (scrollLeft < 600 && scrollLeft > 0) {
      const newScrollLeft = scrollLeft + scrollOffset;
      setScrollLeft(newScrollLeft);
      setLimit(null);
    }
  };

  return (
    <>
      <div className="title">
        <div className="title-content">
          <span className="title-text">Популярные товары</span>
          <Button variant="contained" className="title-btn">
            Все товары {<EastIcon fontSize="small" className="arrow-items" />}
          </Button>
        </div>
      </div>
      <div className="items">
        <Button
          variant="outlined"
          className={
            limit !== "left"
              ? "scroll-btn scroll-btn-left"
              : "scroll-btn scroll-btn-left limit"
          }
          onClick={() => handleScroll(-200)}
        >
          {"<"}
        </Button>
        <div className="items-content" ref={itemsRef}>
          <div className="item-previev">
            <img src={itemPhoto} alt="itemPhoto" className="itemPhoto" />
            <div className="item-info"></div>
            <div className="item-price"></div>
          </div>
          <div className="item-previev">
            <img src={itemPhoto} alt="itemPhoto" className="itemPhoto" />
            <div className="item-info"></div>
            <div className="item-price"></div>
          </div>
          <div className="item-previev">
            <img src={itemPhoto} alt="itemPhoto" className="itemPhoto" />
            <div className="item-info"></div>
            <div className="item-price"></div>
          </div>
          <div className="item-previev">
            <img src={itemPhoto} alt="itemPhoto" className="itemPhoto" />
            <div className="item-info"></div>
            <div className="item-price"></div>
          </div>
          <div className="item-previev">
            <img src={itemPhoto} alt="itemPhoto" className="itemPhoto" />
            <div className="item-info"></div>
            <div className="item-price"></div>
          </div>
          <div className="item-previev">
            <img src={itemPhoto} alt="itemPhoto" className="itemPhoto" />
            <div className="item-info"></div>
            <div className="item-price"></div>
          </div>
        </div>
        <Button
          variant="outlined"
          className={
            limit !== "right"
              ? "scroll-btn scroll-btn-right"
              : "scroll-btn scroll-btn-right limit"
          }
          onClick={() => handleScroll(200)}
        >
          {">"}
        </Button>
      </div>
    </>
  );
};

export default PopularItems;
