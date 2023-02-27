import React, { useState, useEffect } from 'react';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  
  return (
    <div>
      <header
        id="main-header"
      >
        <div className = {scrollPosition > 0 ? "header scrolled":"header top"} >
          <div className="part-1">
            <p id="header">
              <img src="asscets/images/icon.png" alt="head" />
              <span id="span">Medium</span>
            </p>
          </div>
          <div className="part-2">
            <ul className="list">
              <li>Ourstory</li>
              <li>Membership</li>
              <li>Write</li>
              <li id="myBtn" onClick={toggleModal}>
                Sign In
              </li>
            </ul>
          </div>
          <div className="part-3">
            <button
              type="button"
              style={{
                backgroundColor: scrollPosition > 0 ? 'green' : 'black',
              }}
              id="btn"
            >
              Getstarted
            </button>
          </div>
        </div>
      </header>

      {modal && (
        <div id="myModal" className="modal">
          <div className="modal-content" onClick={toggleModal}>
            <span className="close">
              <svg className="oo bi" width="29" height="29">
                <path
                  d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <div className="Welcome">
              <h3 id="welcome">Welcome back</h3>
              <div className="buttonnnn">
                <button className="buttt">Sign in with Google</button>
              </div>
              <div className="buttonnnn">
                <button className="buttt">Sign in with Facebook</button>
              </div>
              <div className="buttonnnn">
                <button className="buttt">Sign in with Apple</button>
              </div>
              <div className="buttonnnn">
                <button className="buttt">Sign in with Twitter</button>
                </div>
              <div className="buttonnnn">
                <button className="buttt">Sign in with email</button>
              </div>
              <p id="acc">
                No Account ? <span id="createOne">Create one</span>
              </p>
            </div>
          </div>
        </div>
      )}
      </div>

  );
}

export default Header;