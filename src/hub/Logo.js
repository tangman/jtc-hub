import React, { Component } from 'react';
import './Logo.css';
import TweenMax from 'gsap';

class Logo extends Component {

  componentDidMount() {
    const letters = [this.letterJ, this.letterT, this.letterC];
    TweenMax.staggerFrom(letters, 1, {left: "+=30", opacity:0, delay:0.5}, 0.3 );
    TweenMax.from(this.subtext, 0.3, {opacity:0, y: "-=10", delay: 1.5});
  }

  render() {
    return (
      <div className="Logo">
        <div>
          <span className="LogoJ" ref={(c) => this.letterJ = c}>J</span>
          <span className="LogoT" ref={(c) => this.letterT = c}>T</span>
          <span className="LogoC" ref={(c) => this.letterC = c}>C</span>
        </div>
        <div className="subtext" ref={(c) => this.subtext = c}>Design & Development</div>
      </div>
    );
  }
}

export default Logo;
