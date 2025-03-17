import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { ImageType } from "../../App";

Modal.setAppElement("#root");
interface ImageModalProps {
  image: ImageType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Author: {image.user?.name || "Unknown"}</p>
      <p>Likes: {image.likes || 0}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
// import Modal from "react-modal";
// import styles from "./ImageModal.module.css";
// import { ImageType } from "../../App";

// interface ImageModalProps {
//   image: ImageType | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
//   if (!image) return null;

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       key={image.id}
//       className={styles.modal}
//       overlayClassName={styles.overlay}
//     >
//       <img src={image.urls.regular} alt={image.alt_description} />
//       <p>Author: {image.user?.name || "Unknown"}</p>
//       <p>Likes: {image.likes || 0}</p>
//       <button onClick={onClose}>Close</button>
//     </Modal>
//   );
// };

// export default ImageModal;
