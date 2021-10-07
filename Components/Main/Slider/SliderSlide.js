import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import SliderCard from "./SliderCard";
import styles from "/styles/embla.module.css";

const SliderSlide = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: false,
    loop: false,
    containScroll: "keepSnaps",
    skipSnaps: false,
  });
  const [isSelected, setIsSelected] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );
  const onSelect = useCallback(() => {
    if (!embla) return;
    setIsSelected(embla.selectedScrollSnap());
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
  }, [embla, setScrollSnaps, onSelect]);
  const PlusClickHandler = () => {
    setIsSelected(isSelected + 1);
  };
  const MinusClickHandler = () => {
    setIsSelected(isSelected - 1);
  };
  const sliders = [0, 1, 2, 3];
  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {sliders.map((item) => {
            return (
              <div className={styles.embla__slide} key={item}>
                <div className={styles.embla__slide__inner}>
                  <SliderCard id={item} selection={isSelected} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute right-36 top-85">
        <PrevButton
          onClick={() => {
            scrollPrev();
            MinusClickHandler();
          }}
          enabled={prevBtnEnabled}
        />
        <NextButton
          onClick={() => {
            PlusClickHandler();
            scrollNext();
          }}
          enabled={nextBtnEnabled}
        />
      </div>
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => {
              scrollTo(index);
              console.log(index);
              setIsSelected(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderSlide;
