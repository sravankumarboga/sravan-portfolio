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
            {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
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
              <img src={process.env.PUBLIC_URL + "/images/sravan1.png"} alt="" />
            </div>
            <div className="about2">
              <h1>About Me</h1>
              <p>""Hello! I'm Sravan, a dedicated UI/UX and Website Designer from Bengaluru. I build digital products that are not only visually appealing but also easy to use. I specialize in turning user needs into interactive reality, ensuring every pixel serves a purpose. Let's create something amazing together.""</p>
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
                  <li><span>2021-2024</span><br />Bachelor’s Degree (B.Sc(M.S.Cs)) | Sri Venkateswara Degree College, Kadapa, Andhra Pradesh.</li>
                  <li><span>2019-2021</span><br /> Intermediate (M.P.C) | Sri Nalandha Junior College, Rajampeta, Andhra Pradesh.</li>
                  <li><span>2019 passed out</span><br />Secondary School (10th) | A.V.S.O & G High School, Madhavaram, Kadapa, Andhra Pradesh.</li>
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
              <i className="fa-solid fa-crop-alt"></i>
              <h2 className="services-tab-title">UI/UX Design</h2>
              <p>I create intuitive, user-centric designs that ensure a seamless digital experience. My focus is on understanding user behavior and translating complex requirements into elegant, functional interfaces.</p>
            </div>
            <div className="services-tab">
              <i className="fa-solid fa-code"></i>
              <h2 className="services-tab-title">Web Development</h2>
              <p>Crafting visually stunning and highly responsive websites. From modern portfolios to complex web applications, I ensure excellence in every pixel and optimal performance across all devices.</p>
            </div>
            <div className="services-tab">
              <i className="fa-solid fa-mobile-screen-button"></i>
              <h2 className="services-tab-title">App Design</h2>
              <p>Designing high-quality mobile applications with a focus on usability and modern aesthetics. I build across platforms, ensuring your app feels native, engaging, and accessible for every user.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------contact-------------------- */}
      <div id="contact">
        <div className="continer">
          <div className="footer">
            <img className="footer-img" src={process.env.PUBLIC_URL + "/images/sravan1.png"} alt="" />
            <div className="footer-text">
              <h1>Sravan Kumar</h1>
              <h2>Email:sravanboga3@gmail.com</h2>
              <h2>Contact: 8121906691</h2>
              <div className="icons">
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
              </div>
              <a href={process.env.PUBLIC_URL + "/images/SRAVAN KUMAR BOGA RESUME 1.pdf"} download className="btn">Download CV</a>
            </div>
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