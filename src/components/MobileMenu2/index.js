import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css';

export default class MobileMenu2 extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow } = this.state;

        return (
          <div>
            <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
              <div className="menu-close">
                <div className="clox" onClick={this.menuHandler}>
                  <i className="ti-close"></i>
                </div>
              </div>

              <ul className="responsivemenu" style={{ fontFamily: 'Lato, sans-serif' }}>
                <li>
                  <Link
                    activeClass="active"
                    to="/home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="/rsvp"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    RSVP
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="/events"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="/wedding-party"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Wedding Party
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="/gallery"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div className="showmenu" onClick={this.menuHandler}>
              <button type="button" className="navbar-toggler open-btn">
                <span className="icon-bar first-angle"></span>
                <span className="icon-bar middle-angle"></span>
                <span className="icon-bar last-angle"></span>
              </button>
            </div>
          </div>
        );
    }
}
