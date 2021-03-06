import React from 'react';
import NavBar from '../NavBar';
import './HomeContent.css';

const HomeContent = () => {
  return (
    <div className="content-container">
      <NavBar />
      <section className="banner">
        <div className="flex-image">
          <img src="/images/bottle.png" alt="redwine" className="red-wine" />
        </div>
        <div className="flex-text">
          <p className="banner-text">
            Discover New Wines, <br />
            Effortlessly.
          </p>
        </div>
      </section>
      <svg
        className="wave-banner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#5000ca"
          fillOpacity="0.7"
          d="M0,320L8.6,298.7C17.1,277,34,235,51,181.3C68.6,128,86,64,103,69.3C120,75,137,149,154,160C171.4,171,189,117,206,85.3C222.9,53,240,43,257,53.3C274.3,64,291,96,309,138.7C325.7,181,343,235,360,229.3C377.1,224,394,160,411,133.3C428.6,107,446,117,463,117.3C480,117,497,107,514,96C531.4,85,549,75,566,90.7C582.9,107,600,149,617,154.7C634.3,160,651,128,669,144C685.7,160,703,224,720,213.3C737.1,203,754,117,771,101.3C788.6,85,806,139,823,160C840,181,857,171,874,154.7C891.4,139,909,117,926,96C942.9,75,960,53,977,74.7C994.3,96,1011,160,1029,192C1045.7,224,1063,224,1080,192C1097.1,160,1114,96,1131,69.3C1148.6,43,1166,53,1183,74.7C1200,96,1217,128,1234,138.7C1251.4,149,1269,139,1286,117.3C1302.9,96,1320,64,1337,96C1354.3,128,1371,224,1389,250.7C1405.7,277,1423,235,1431,213.3L1440,192L1440,0L1431.4,0C1422.9,0,1406,0,1389,0C1371.4,0,1354,0,1337,0C1320,0,1303,0,1286,0C1268.6,0,1251,0,1234,0C1217.1,0,1200,0,1183,0C1165.7,0,1149,0,1131,0C1114.3,0,1097,0,1080,0C1062.9,0,1046,0,1029,0C1011.4,0,994,0,977,0C960,0,943,0,926,0C908.6,0,891,0,874,0C857.1,0,840,0,823,0C805.7,0,789,0,771,0C754.3,0,737,0,720,0C702.9,0,686,0,669,0C651.4,0,634,0,617,0C600,0,583,0,566,0C548.6,0,531,0,514,0C497.1,0,480,0,463,0C445.7,0,429,0,411,0C394.3,0,377,0,360,0C342.9,0,326,0,309,0C291.4,0,274,0,257,0C240,0,223,0,206,0C188.6,0,171,0,154,0C137.1,0,120,0,103,0C85.7,0,69,0,51,0C34.3,0,17,0,9,0L0,0Z"
        ></path>
      </svg>
      <br />
      <section className="description-wrapper">
        <ul className="flex-description">
          <li key="forkandknife" className="curious">
            <div className="icon utensil">
              <i className="fas fa-utensils"></i>
            </div>
            <br />
            <h2>
              <em>Curious?</em>
            </h2>
            <span>Tell us what you're eating</span>
          </li>
          <li key="winebottle" className="instant">
            <div className="icon bottle">
              <i className="fas fa-wine-bottle"></i>
            </div>
            <br />
            <h2>Instant</h2>
            <span>Pick any of our preferred wines curated just for you</span>
          </li>
          <li key="smileyface" className="enjoy">
            <div className="icon emoji">
              <i className="fas fa-grin-hearts"></i>
            </div>
            <br />
            <h2>Enjoy!</h2>
            <span>Get optimal dining experience</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomeContent;
