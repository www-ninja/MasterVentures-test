import { FC, useState } from "react";
import { ICategory } from "../types";

import styles from '../styles/Home.module.css'
import Card from "./card";

const Category: FC<{ data: ICategory, onSelect: any, selected: string[] }> = ({ data, onSelect, selected }) => {
    let isSelected = data.items.some(item => selected.some(el => el === item.id));
    return (
        <div className={styles.category}>
            <div className={styles.title}>{data.title}</div>
            {data.items && data.items.map(item => <Card cardInfo={item} selected={selected} onSelect={onSelect} enable={!isSelected} />)}
        </div>
    )
}
export default Category;