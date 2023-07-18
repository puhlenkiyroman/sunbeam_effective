import React from 'react';
import styles from './main.module.css';
import { Link, useNavigate } from 'react-router-dom';

import '@fontsource/roboto/400.css';

function Main() {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/schedule');
    };

    return (
        <div className={styles.smiles}>
            <a> Мы за</a>
            <div className={styles.flower}>
                <img src="/png/цветок.png" alt="цветок" />
            </div>
            <div className={styles.child_smiles}>
                <img src="/png/detskie_ulibki.png" alt="детские улыбки" />
            </div>
            <div className={styles.studio}>
                <div> Социальная студия изобразительных искусств </div>
                <div> “Луч солнца” </div>
            </div>
            <div className={styles.home}>
                <img src="/png/домик.png" alt="домик" />
            </div>
            <div className={styles.button}>
                <img
                    src="/png/кнопка.png"
                    alt="кнопка"
                    onClick={clickHandler}
                />
                <Link to="/schedule"></Link>
            </div>
        </div>
    );
}

export default Main;
