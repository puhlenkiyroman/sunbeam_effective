import React from 'react';
import styles from "../footer/footer.module.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';

function Footer() {

    const clickHandler1= () => {
        window.location.href = 'https://2gis.ru/omsk/firm/70000001067193459?m=73.276957%2C55.046163%2F16';
    };

    const clickHandler2 = () => {
        window.location.href = 'https://vk.com/club217238950';
    };

    return (
        <div className={styles.footer}>
            <img src="/png/footer.png" alt="footer" className={styles.footerImg} />
            <div className={styles.information}>
                <div className={styles.firstryad}>
                    <li> +7 (913) 640-03-59 </li>
                    <li> г. Омск, ул. Энергетиков, 70 </li>
                    <div className={styles.links}>
                        <li> <img src="/png/2гис.png" alt="2гис" onClick={clickHandler1}/> </li>
                        <li> <img src="/png/вк.png" alt="вк" onClick={clickHandler2}/> </li>
                    </div>
                </div>
                <div className={styles.secondryad}>
                    <li> © Луч солнца, 2023 </li>
                    <li> ИП Рыбин Д. А. </li>
                    <li> ОГРНИП: 320723200066545 </li>
                </div>
                <img src="/png/payments.png" alt="платежные системы" className={styles.payments}/>
            </div>
        </div>
    );
}

export default Footer;