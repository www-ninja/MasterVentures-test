import { FC } from "react";
import styles from '../styles/Home.module.css'

const Modal: FC<{ onClose: any, selected: string[] }> = ({ onClose, selected }) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <span className={styles.btnClose} onClick={() => onClose()}>&times;</span>
                <p className={styles.modalTitle}>{
                    selected && selected.length === 0 ? 'You did not selected anyone!' : 'Success!'
                }</p>
                <ul className={styles.list}>
                    {selected && selected.map((el: string) => <li>
                        {el}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Modal;