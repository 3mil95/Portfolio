import React, { Component } from 'react';
import NoiseCanvas from './NoiseCanvas';
import './Header.css';
import profilImg from '../../Content/Images/Emil.jpg'


class Header extends Component {
    state = { open: false }

    handleClick = (linckTitle) => {
        this.setState({
            open: false
        })
        this.props.handleClick(linckTitle)
    }

    handleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() { 
        const { open } = this.state;

        return (
            <div className="header">
                <NoiseCanvas/>
                <h1>Emil Clemdson</h1>

                <img src={profilImg} alt="profile"/>

                <div className="nav-div">
                    <button onClick={this.handleOpen} className="nav-button">{(!open) ? "≡" : "×"}</button>
                    <div className={(open) ? "nav-links-div" : "nav-links-div nav-links-div-close"}>
                        <button onClick={() => this.handleClick("About")}>About</button>
                        <button onClick={() => this.handleClick("Education")}>Education</button>
                        <button onClick={() => this.handleClick("Project")}>Project</button>
                        <button onClick={() => this.handleClick("Contact me")}>Contact me</button>
                    </div>
                </div>
            </div>
          );
    }
}

export default Header;






/*class Noise {

    constructor() {
        this.size = 50
        this.array = new Array(this.size);

        for (var i = 0; i < this.size; i++) { 
            this.array[i] = new Array(this.size); 
        } 

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) { 
                this.array[i][j] = Math.floor(Math.random() * 255);
            }
        }

        for (let i = 0; i < this.size; i++) { 
            this.array[0][i] = this.array[this.size-1][i]
            this.array[i][0] = this.array[i][this.size-1]
        }

        this.array[this.size-1][0] = this.array[0][0]
        this.array[this.size-1][this.size-1] = this.array[0][0]
        this.array[0][this.size-1] = this.array[0][0]
    }

    noise2D = (x, y) => {
        

        x = ((x) % this.size);
        y = ((y) % this.size);
        //y /= 3
        //x /= 3

        let xUIndex = Math.ceil(x)
        let xLIndex = Math.floor(x)
        let yUIndex = Math.ceil(y)
        let yLIndex = Math.floor(y)

        return this.interpolat2D(xUIndex, xLIndex, yUIndex, yLIndex, x, y)
         
    }

    interpolat2D = (xUIndex, xLIndex, yUIndex, yLIndex, x, y) => {
        try {
        let colorL = this.interpolat(this.array[xLIndex][yLIndex], this.array[xUIndex][yLIndex], x - xLIndex);
        let colorU = this.interpolat(this.array[xLIndex][yUIndex], this.array[xUIndex][yUIndex], x - xLIndex);

        return this.interpolat(colorL, colorU, y - yLIndex);
        } catch(e) {
            return -100;
        }
    }

    interpolat = (color1, color2, t) => {
        t = (1 - Math.cos(t*Math.PI)) / 2
        return (1 - t) * color1 + t * color2;
    }

}



/*function randomColor() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let int = Math.floor(Math.random() * 10); 
        color += int 
    }
    return color
}*/