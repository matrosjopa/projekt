import React from 'react'
import { NavigationBar } from '../NavigationBar'
import './Gallery.css'
import { Up } from '../Header';


export class Gallery extends React.Component {

    render() {
        return (
            <div className="Gallery">
                <Up />
                <NavigationBar />
                <div className="Gallery_foto" alt="foto">
                    <img src="https://vistapointe.net/images/nibbler-wallpaper-12.jpg" />
                    <img src="https://im0-tub-ru.yandex.net/i?id=0cd8ac38c16c972786f878ead519d573&n=13" />
                    <img src="http://inmyotherworld.free.fr/gfx/futurama/wallpapers/28.jpg" />
                    <img src="https://memegenerator.net/img/images/15052290.jpg" />
                </div>
            </div >

        )

    };

}