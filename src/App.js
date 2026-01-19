import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('skills');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default matching your script logic (starts black/white checks)

  // Handle Theme Change
  useEffect(() => {
    const body = document.body;
    let headerp = document.getElementById("header-p");
    let headerh1 = document.getElementById("header-h1");
    let moon = document.getElementById("moon");
    let menu = document.getElementById("menu");

    if (isDarkMode) {
      body.style.backgroundColor = "black";
      body.style.color = "white";

    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      headerp.style.color = "white";
      headerh1.style.color = "white";
      moon.style.color = "white";
      menu.style.color = "white";

    }
  }, [isDarkMode]);

  const openTab = (tab) => {
    setActiveTab(tab);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <div id="header">
        <div className="continer">
          <nav className="nav-bar">
            <div className="nav-title">
              <span>S</span>ravan kumar
            </div>
            <ul id="sidemenu" style={{ right: isMenuOpen ? "0" : "-200px" }}>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">contact</a></li>

              {/* Theme Toggles */}
              {!isDarkMode ? (
                <i
                  className="fa-solid fa-moon"
                  id="moon"
                  onClick={toggleTheme}
                  style={{ display: 'inline-block', cursor: 'pointer' }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-sun"
                  id="sun"
                  onClick={toggleTheme}
                  style={{ display: 'inline-block', cursor: 'pointer', color: 'white' }}
                ></i>
              )}

              <i className="fa-solid fa-xmark menu" onClick={closeMenu}></i>
            </ul>
            <i className="fa-solid fa-bars menu" onClick={openMenu} id="menu" style={{ color: isDarkMode ? 'white' : 'black' }}></i>
          </nav>
          <div className="header-text">
            <p id="header-p" style={{ color: isDarkMode ? 'white' : 'black' }}>Website designer</p>
            <h1 id="header-h1" style={{ color: isDarkMode ? 'white' : 'black' }}>
              Hi,i'm <span>Sravan Kumar</span><br />From Bengaluru
            </h1>
          </div>
        </div>
      </div>

      {/* ------------------about----------------------- */}
      <div id="about">
        <div className="continer">
          <div className="row">
            <div className="about1">
              <img src="/images/sravan1.png" alt="" />
            </div>
            <div className="about2">
              <h1>About Me</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptate amet fugiat, esse at omnis ipsa odio nesciunt laboriosam dolores iste vero ab, eos quia non quae est quos totam alias. Nobis doloremque ipsa modi itaque, totam impedit vel pariatur beatae. Soluta iure error voluptates laboriosam quas et eveniet non!</p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === 'skills' ? 'active-tab-link' : ''}`}
                  onClick={() => openTab('skills')}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${activeTab === 'Education' ? 'active-tab-link' : ''}`}
                  onClick={() => openTab('Education')}
                >
                  Education
                </p>
              </div>

              <div className={`tab-content ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                <ul>
                  <li><span>Ui/Ux designer</span><br />Designing the Web/App base interface</li>
                  <li><span>Website Designing</span><br />Web applications development and designing</li>
                  <li><span>App based Applications</span><br />Designing and updating the Mobile App based applications</li>
                </ul>
              </div>

              <div className={`tab-content ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
                <ul>
                  <li><span>2021-2024</span><br />Degree Sri Venkateswara Degree College,Kadapa(Distric),Andhra Pradesh</li>
                  <li><span>2019-2021</span><br /> Intermediate Sri Nalandha Junior College,Rajampeta,Andhra Pradesh</li>
                  <li><span>2019 passed out</span><br />10<sup>th</sup>A.V.S.O&G High School,Madhavaram,Kadapa,Andhra Pradesh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------Services---------------------- */}
      <div id="services">
        <div className="continer">
          <h1 className="services-title">My Services</h1>
          <div className="services-main-continer">
            <div className="services-tab">
              <h2 className="services-tab-title">Ui/Ux Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, iure natus corrupti non ad voluptatem sapiente doloremque modi recusandae error eaque. Dolores, vero nulla?</p>
            </div>
            <div className="services-tab">
              <h2 className="services-tab-title">Website Design </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, iure natus corrupti non ad voluptatem sapiente doloremque modi recusandae error eaque. Dolores, vero nulla?</p>
            </div>
            <div className="services-tab">
              <h2 className="services-tab-title">Mobile App Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, iure natus corrupti non ad voluptatem sapiente doloremque modi recusandae error eaque. Dolores, vero nulla?</p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------contact-------------------- */}
      <div id="contact">
        <div className="continer">
          <div className="footer">
            <h1>Sravan Kumar</h1>
            <h2>Email:sravanboga3@gmail.com</h2>
            <h2>Contact: 8121906691</h2>
            <div className="icons">
              <a href=""><i className="fa-brands fa-linkedin"></i></a>
              <a href=""><i className="fa-brands fa-facebook"></i></a>
            </div>
            <a href="/images/SRAVAN KUMAR BOGA RESUME 1.pdf" download className="btn">Download CV</a>
          </div>
        </div>
      </div>

      {/* ----------------------- copyright------------------------- */}
      <div className="copyright">
        {/* Note: marquee is deprecated, considering using CSS animations instead */}
        <marquee behavior="" direction="left"> Copyright © 2026 Sravan. All content, code, and design elements are protected. Unauthorized use is prohibited.</marquee>
      </div>
    </div>
  );
}

export default App;