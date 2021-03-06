import React from 'react';
import './homepage.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Svg1 } from '../../assets/home-title.svg';
import { ReactComponent as Svg2 } from '../../assets/home-world.svg';
import { ReactComponent as Svg3 } from '../../assets/home-india.svg';

function HomePage() {
  return (
    <React.Fragment>
      <section className="title-container">
        <div className="title-container-title">
          <h1 className="title">COVID-19</h1>
          <span className="title__sub">All in One Tracker</span>
          <Link to="/world">
            <button className="title__button">
              <span className="split">Global</span>
              <span className="split">Statistics</span>
            </button>
          </Link>
          <Link to="/india">
            <button className="title__button">
              <span className="split">India</span>
              <span className="split">Statistics</span>
            </button>
          </Link>
        </div>
        <div className="title-container-image">
          <Svg1 className="logo" />
        </div>
      </section>

      <div className="gutter">&nbsp;</div>

      <section className="info-container">
        <div className="info-container__1">
          <h2 className="info-container__1-title">
            Symptoms of <span className="title-color">COVID-19</span>
          </h2>

          <div className="symptoms-container-wrap">
            <div className="symptoms-container">
              <img
                className="symptoms"
                src={require('../../assets/images/cough.jpg')}
                alt="hello"
              />
              <h3>Dry Cough</h3>
            </div>
            <div className="symptoms-container">
              <img
                className="symptoms"
                src={require('../../assets/images/throat.jpg')}
                alt="hello"
              />
              <h3>
                <span className="split">Sore </span> Throat
              </h3>
            </div>
            <div className="symptoms-container">
              <img
                className="symptoms"
                src={require('../../assets/images/fever.jpg')}
                alt="hello"
              />
              <h3>Fever</h3>
            </div>
          </div>
          <div className="symptoms-container-wrap">
            <div className="symptoms-container">
              <img
                className="symptoms"
                src={require('../../assets/images/tiredness.jpg')}
                alt="hello"
              />
              <h3>Tiredness</h3>
            </div>
            <div className="symptoms-container">
              <img
                className="symptoms"
                src={require('../../assets/images/breathing.jpg')}
                alt="hello"
              />
              <h3>
                <span className="split"> Breathing</span> Problem
              </h3>
            </div>
            <div className="symptoms-container">
              <img
                className="symptoms"
                src={require('../../assets/images/headache.png')}
                alt="hello"
              />
              <h3>Headache</h3>
            </div>
          </div>
        </div>

        <div className="info-container__1">
          <div className="spread">
            <h2 className="info-container__1-title">How It Spreads</h2>
            <div className="symptoms-container-wrap">
              <div className="symptoms-container">
                <img
                  className="symptoms"
                  src={require('../../assets/images/handshake.jpg')}
                  alt="hello"
                />
                <h3>
                  <span className="split">Personal</span> Contact
                </h3>
              </div>
              <div className="symptoms-container">
                <img
                  className="symptoms"
                  src={require('../../assets/images/massgather.jpg')}
                  alt="hello"
                />
                <h3>
                  <span className="split">Mass</span> Gathering
                </h3>
              </div>
              <div className="symptoms-container">
                <img
                  className="symptoms"
                  src={require('../../assets/images/sneezing.jpg')}
                  alt="hello"
                />
                <h3>
                  <span className="split">Contaminated</span>
                  <span>Air</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="prevention">
            <h2 className="info-container__1-title">Prevention</h2>
            <div className="symptoms-container-wrap">
              <div className="symptoms-container">
                <img
                  className="symptoms"
                  src={require('../../assets/images/wash.jpg')}
                  alt="hello"
                />
                <h3>
                  <span className="split">Wash</span>
                  <span>Hands</span>
                </h3>
              </div>
              <div className="symptoms-container">
                <img
                  className="symptoms"
                  src={require('../../assets/images/mask.jpg')}
                  alt="hello"
                />
                <h3>
                  <span className="split">Wear</span>
                  <span>Mask</span>
                </h3>
              </div>
              <div className="symptoms-container">
                <img
                  className="symptoms"
                  src={require('../../assets/images/distance.jpg')}
                  alt="hello"
                />
                <h3>
                  <span className="split">Social</span>
                  <span>Distancing</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gutter">&nbsp;</div>

      <section className="world-stats-container">
        <div className="world-stats-image">
          <Svg2 className="world-stats-image__img" />
        </div>
        <div className="world-stats-content">
          <h2 className="world-stats-content__text">
            Check <span style={{ color: '#f79595' }}>World</span> Statistics
          </h2>
          <Link to="/world">
            <button className="world-stats-content__btn">
              &#8618; Click Here
            </button>
          </Link>
        </div>
      </section>

      <section className="world-stats-container">
        <div className="world-stats-content">
          <h2 className="world-stats-content__text">
            Check <span style={{ color: ' #FF9933' }}>In</span>
            <span style={{ color: '#FFFFFF' }}>d</span>
            <span style={{ color: '#138808' }}>ia</span> Statistics
          </h2>
          <Link to="/india">
            <button className="world-stats-content__btn">
              &#8618; Click Here
            </button>
          </Link>
        </div>
        <div className="world-stats-image">
          <Svg3 className="world-stats-image__img" />
        </div>
      </section>
    </React.Fragment>
  );
}

export default HomePage;
