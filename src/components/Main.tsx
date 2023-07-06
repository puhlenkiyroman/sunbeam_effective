import React from 'react';
import Header from "./Header";

const Main: React.FC = () => {
    return (
        <div className="BigMain">
            <div className="LuchSolntca">
                <img className="Cloud_leftup" src={require('../png/cloud_left_up.png')} alt="Clouds" />
                <img className="Cloud_down" src={require('../png/cloud_left_down.png')} alt="Clouds" />
                <img className="Cloud_right" src={require('../png/cloud_right.png')} alt="Clouds" />
                <img className="Sun" src={require('../png/big_sun.png')} alt="Sun" />
                <a> Луч солнца</a>
                <p> Социальная студия изобразительных искусств</p>
                <b> Мы за детские улыбки!</b>
            </div>
            <img className="Background" src={require('../png/backgroud_o_nas.png')} alt="background" />
            <img className="Elipse" src={require('../png/elipse_o_nas.png')} alt="elipse" />
            <a className="info" href="#">О нас</a>
            <div className="NashaCel"> Наша цель - помочь и поддержать современных детей с разными жизненными ситуациями, путем вовлечения в творческий процесс.
                В нашей студии хорошая среда для развития творческого потенциала
            </div>
        </div>
    );
}

export default Main;