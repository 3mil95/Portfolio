import React, { Component } from 'react';
import SimplexNoise from 'simplex-noise';
import lerpHex from '../../Util/lerpColor';

class NoiseCanvas extends Component {
    state = {  }

    componentDidMount() {
        this.offsetX = 0;
        this.offsetY = 0;
        this.x = 50;
        this.y = 50;
        this.noise = new SimplexNoise()
        this.canvas = document.getElementById('TheCanvas');
        this.c = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth / 3.5;
        this.canvas.height = 120;
        this.draw();

        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth / 3.5;
            this.canvas.height = 120;
        });

        this.canvas.addEventListener('mousemove', (evt) => { 
            const rect = this.canvas.getBoundingClientRect();
            this.x = evt.clientX / 3.5 - rect.left
            this.y = evt.clientY / 3.5 - rect.top
        })
    }

    update = () => {
        this.offsetX += 0.003;
        this.offsetY += 0.005;
    }

    draw = () => {
        this.update()
        var imgData = this.c.createImageData(this.c.canvas.width, this.c.canvas.height);
        let n = 0;
        for (let y = 0; y < this.c.canvas.height; y++) {
            for (let x = 0; x < this.c.canvas.width; x++) {

                let value = (1 + this.noise.noise3D(x/300 + this.offsetX /4, y/300 + this.offsetX / 2, this.offsetX))
                value += (1 + this.noise.noise2D(x/200 + this.offsetX/4, y/200 - this.offsetY / 6))
                
                let dist = ((this.x - x) ** 2 + (this.y -y) ** 2) ** 0.5;

                if (dist < 100) {
                    value = value * (dist/100) ** 0.09
                } 

                value += (1 + this.noise.noise2D(x/35 + this.offsetX * 2, y/35 - this.offsetY * 2)) *0.1
                value += (1 + this.noise.noise2D(x/10 + this.offsetX * 2, y/10 - this.offsetY * 2)) *0.05
             
                const color = getColor(value);

                imgData.data[n+0] = color.r;
                imgData.data[n+1] = color.g;
                imgData.data[n+2] = color.b;
                imgData.data[n+3] =  255;
                n += 4
            }
        }
        this.c.putImageData(imgData, 0, 0);

        requestAnimationFrame(this.draw);
    }

    render() { 
        return ( 
            <canvas style={{width:'100vw'}} id="TheCanvas"/>
        );
    }
}
 

function getColor(value) {

    value *= 300
    value = value % 100
    value = Math.abs(value - 50)

    value = (value / 50)**1.6;
    return lerpHex(value);


}

export default NoiseCanvas;