import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={require('../png/sun in header.png')} alt="Логотип" />
            </div>
            <div className="layers">
                <ul className="layer1">
                    <li><a>+7 (913) 640-03-59</a></li>
                    <li className="address"><a>г. Омск, улица Энергетиков, 70</a></li>
                    <li> <a href="#"> <img src={require('../png/vk logo.png')} alt="Логотип" /> </a> </li>
                </ul>
                <ul className="layer2">
                    <li><a href="#">Расписание</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Наши работы</a></li>
                    <li><a href="#">Коммерческие услуги</a></li>
                </ul>
            </div>
        </header>
    );
}


export default Header;
