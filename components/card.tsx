import { useState, FC } from "react";
import { IBallot } from "../types";
import styles from '../styles/Home.module.css'

const Card: FC<{ cardInfo: IBallot, selected: string[], onSelect: any, enable: boolean }> = ({ cardInfo, selected, onSelect, enable }) => {
    let checked = selected.find(el => el === cardInfo.id);
    return (
        <div className={`${styles.card} ${!enable && 'disabled'}`}
            onClick={() => (enable || checked) && onSelect(cardInfo.id)}
        >
            <div className={styles.cardTitle}>{cardInfo.title}</div>
            <img src={cardInfo.photoUrL} alt={cardInfo.title} />
            <div className={`${styles.selectNote} ${checked && styles.btnSelect}`}>
                {checked ? 'selcted' : !enable ? 'disabled' : 'select'}
            </div>
        </div>
    )
}

export default Card;