import React from 'react';
import styles from "../our_program/ourprogram.module.css";

function OurProgram() {
    return (
        <div className={styles.ourprogram}>
            <img src="/png/our_programs.png" alt="наши программы" className={styles.ourProgramImage} />
            <div className={styles.circle_frames}>
                <div className={styles.firstryad}>
                    <div className={styles.circle_frame1}></div>
                    <div className={styles.circle_frame2}></div>
                    <div className={styles.circle_frame3}></div>
                </div>
            </div>
        </div>

    );
}

export default OurProgram;