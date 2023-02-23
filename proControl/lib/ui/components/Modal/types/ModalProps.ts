export interface ModalProps {
  /** the title of the modal */
  title: string;

  /** onClose handler */
  onClose: () => void;

  /** should we show the modal */
  show: boolean;

  /* childrens */
  children: React.ReactNode;

  /** the zIndex of the Blur */
  zIndex?: string;

  /** background  */
  bg?: string;

  /** move to buttom of the screen*/
  moveToBottomRight?: boolean;
}
