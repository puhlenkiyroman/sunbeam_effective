import React from 'react';
import styles from "../our_program/ourprogram.module.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import {useNavigate} from "react-router-dom";

function OurProgram() {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/schedule');
    };

    return (
        <div className={styles.ourprogram}>
            <img src="/png/our_programs.png" alt="наши программы" className={styles.ourProgramImage} />
            <img src="/png/zavitushka2.png" alt="завитушка" className={styles.zavitushka2} />
            <div className={styles.circle_frames}>
                <div className={styles.firstryad}>
                    <div className={styles.circle_frame1}>
                        <img src="/png/ourprogram1.png" alt="наши программы" className={styles.perviyrisunok} />
                        <div className={styles.text_caption}> Для детей 4 лет </div>
                        <div className={styles.text_creation}> Ранее творческое <br/> развитие</div>
                        <div onClick={clickHandler} className={styles.schedule}>
                            Расписание
                        </div>
                    </div>

                    <div className={styles.circle_frame2}>
                        <img src="/png/ourprogram2.png" alt="наши программы" className={styles.vtoroyrisunok} />
                        <div className={styles.text_caption}> Для детей 5-6 лет </div>
                        <div className={styles.text_creation}> Художественное <br/> творчество</div>
                        <div onClick={clickHandler} className={styles.schedule}>
                            Расписание
                        </div>
                    </div>

                    <div className={styles.circle_frame3}>
                        <img src="/png/ourprogram3.png" alt="наши программы" className={styles.tretiyrisunok} />
                        <div className={styles.text_caption}> Для детей 7-8 лет </div>
                        <div className={styles.text_creation}> Основы художественного <br/> образования</div>
                        <div onClick={clickHandler} className={styles.schedule}>
                            Расписание
                        </div>
                    </div>
                </div>
                <div className={styles.secondryad}>
                    <div className={styles.circle_frame4}>
                        <img src="/png/ourprogram1.png" alt="наши программы" className={styles.perviyrisunok} />
                        <div className={styles.text_caption}> Для детей 8-9 лет </div>
                        <div className={styles.text_creation}> Основы художественного <br/> образования</div>
                        <div onClick={clickHandler} className={styles.schedule}>
                            Расписание
                        </div>
                    </div>

                    <div className={styles.circle_frame5}>
                        <img src="/png/ourprogram4.png" alt="наши программы" className={styles.vtoroyrisunok} />
                        <div className={styles.text_caption}>  Для детей 10-11 лет </div>
                        <div className={styles.text_creation}> Основы художественного <br/> образования</div>
                        <div onClick={clickHandler} className={styles.schedule}>
                            Расписание
                        </div>
                    </div>

                    <div className={styles.circle_frame6}>
                        <img src="/png/ourprogram5.png" alt="наши программы" className={styles.tretiyrisunok} />
                        <div className={styles.text_caption}> Для детей любого возраста </div>
                        <div className={styles.text_creation}> Индивидуальные <br/> коррекционные занятия </div>
                        <div onClick={clickHandler} className={styles.schedule}>
                            Расписание
                        </div>
                    </div>
                </div>
                <img src="/png/butterfly.png" alt="butterfly" className={styles.butterfly} />
                <img src="/png/zavitushka3.png" alt="завитушка" className={styles.zavitushka3} />
                <img src="/png/zavitushka4.png" alt="завитушка" className={styles.zavitushka4} />
            </div>
        </div>

    );
}

export default OurProgram;