import styles from "./ImageCard.module.css";
import { ImageType } from "../../App";

interface ImageCardProps {
  image: ImageType;
  onClick: (image: ImageType) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
