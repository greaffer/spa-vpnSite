import left from "/public/Images/Slider/buttons/left.svg";
import Image from "next/image";
import styles from "../../../styles/embla.module.css";
export const DotButton = ({ selected, onClick }) => (
  <button
    className={`${styles.embla__dot} ${selected ? styles.is__selected : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className={`${styles.embla__button} ${styles.embla__button__prev}`}
    onClick={onClick}
    disabled={!enabled}
  >
    <Image
      src={left}
      alt={"image"}
      className={`${styles.embla__button__svg}`}
    />
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className={`${styles.embla__button} ${styles.embla__button__next}`}
    onClick={onClick}
    disabled={!enabled}
  >
    <Image
      src={left}
      alt={"image"}
      className="embla__button__svg transform rotate-180"
    />
  </button>
);
