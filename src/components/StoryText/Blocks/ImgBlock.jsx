import { useRef, useEffect } from 'react';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css'; 
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';

import styles from './Block.module.scss';

const ImgBlock = ({ img, caption, size }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = lightGallery(galleryRef.current, {
      plugins: [lgZoom],
      speed: 500,
      download: false,
      selector: 'a' 
    });

    return () => {
      gallery.destroy();
    };
  }, []);

  const bigImg = size === 'big' ? { maxWidth: '100%' } : {};

  return (
    <div className={styles.img} style={bigImg} ref={galleryRef}>
      <a href={img} data-src={img}>
        <img src={img} alt={caption} />
      </a>
      <p className={styles.imgCaption}>{caption}</p>
    </div>
  );
};

export default ImgBlock;
