import React, { useState } from "react";
import styles from "./Carousel.module.scss";

export const Carousel = ({ images = [], title = "" }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.container}>
      <img
        className={styles.selected}
        src={selectedImage ?? images[0]}
        alt={title}
      />
      <div className={styles.row}>
        {images.map((image) => (
          <button
            className={
              styles[`buttons${selectedImage === image ? "--selected" : ""}`]
            }
            key={image}
            onClick={() => setSelectedImage(image)}
          >
            <img className={styles.miniatures} src={image} alt={title}></img>
          </button>
        ))}
      </div>
    </div>
  );
};
