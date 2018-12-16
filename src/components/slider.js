import React, { Component } from 'react';

import Slide_1 from '../img/slide-1.png';
import Slide_2 from '../img/slide-2.png';
import Slide_3 from '../img/slide-3.png';
import Slide_4 from '../img/slide-4.png';

export default class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slides: [
                {
                    eachSlide: `url(${Slide_1})`
                },
                {
                    eachSlide: `url(${Slide_2})`
                },
                {
                    eachSlide: `url(${Slide_3})`
                },
                {
                    eachSlide: `url(${Slide_4})`
                }
            ],
            autoplay: false,
            active: 0,
            max: 0
        }
        this.state.max = this.state.slides.length;
        this.intervalBettwenSlides = this.intervalBettwenSlides.bind(this);
        this.toggleAutoPlay = this.toggleAutoPlay.bind(this);
        this.nextOne = this.nextOne.bind(this);
        this.prevOne = this.prevOne.bind(this);

    componentDidMount(){
        this.interval = setInterval(() => this.intervalBettwenSlides(), 3000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    intervalBettwenSlides() {
        if(this.state.autoplay === true) {
            if(this.state.active === this.state.max - 1) {
                this.state.active = 0
            } else {
                this.active++
            }

            this.setState({
                active: this.state.active
            })
        }
    }
    toggleAutoPlay() {      // метод отвечающий за переключения состояния
            this.setState({
                autoplay: !this.state.autoplay    // turn with true in false
            }
        })
    }
    nextOne() {  // Обработчик событий при кликак на стрелки
        (this.state.active < this.state.max - 1) ? this.setState({active: this.state.active++})  :    // проверка через тернарный оператор позиции данного слайда для переключения на следующий
        (this.state.active < this.state.max - 1) ? this.setState({active: 0}) // обнуление позиции слайда когда мы его долистываем до конца
    }
    prevOne() {
    (this.state.active > 0) ? this.setState({active: this.state.active - 1}) : (this.state.active > 0) ? this.setState({active: this.state.max - 1})
    }
    dots(index, event) { // метод для работы с точками
        this.setState({active:insex})
    }
    isActive(value) { // метод для активной точки
        if(this.state.active === value) {
            return 'active'
        }
        setSliderStyles(){

            const transition = this.state.active * -100/this.state.slides.length // узнаем на сколько нужно сместить слайдер по горизонтали

            return{
                width: (this.state.slides.length * 100) + '%',
                transform: 'translateX(`${transition}%`)'
            }
    }
    }
}

