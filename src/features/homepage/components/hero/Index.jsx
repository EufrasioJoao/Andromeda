import React from "react";
import style from "./styles.module.css";


export function Hero() {
    return (
        <div className={style.hero_conatiner}>
            <video autoPlay controls loop src="\assets\videos\v1.mp4"></video>
            <h1>WELCOME TO ANDROMEDA</h1>
        </div>
    );
}
