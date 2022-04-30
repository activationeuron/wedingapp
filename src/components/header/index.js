/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from "react";
import { connect } from "react-redux";
import MobileMenu from "../MobileMenu";
import { removeFromCart } from "../../store/actions/action";
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import HeaderTopbar from "../HeaderTopbar";
import Logo from '../../images/afaan-mariam-logo.png';

class Header extends Component {
  state = {
    isSearchShow: false,
    isCartShow: false,
  }

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow
    })
  }
  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow
    })
  }

  render() {

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    }

    return (
      <header id="header" className={this.props.topbarBlock}>
        <HeaderTopbar />
        <div className={`wpo-site-header ${this.props.hclass}`} id="home">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <NavLink
                      onClick={ClickHandler}
                      className="navbar-brand logo"
                      to="/home"
                    >
                      <img
                        src={Logo}
                        alt="Logo"
                        style={{ height: "80px", width: "auto" }}
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li>
                        <Link
                          to="/"
                          style={{
                            fontFamily: "Lato, sans-serif",
                            fontWeight: "600",
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/rsvp"}
                          style={{
                            fontFamily: "Lato, sans-serif",
                            fontWeight: "600",
                          }}
                        >
                          RSVP
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/events"
                          style={{
                            fontFamily: "Lato, sans-serif",
                            fontWeight: "600",
                          }}
                        >
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/wedding-party"
                          style={{
                            fontFamily: "Lato, sans-serif",
                            fontWeight: "600",
                          }}
                        >
                          Wedding Party
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallery"
                          style={{
                            fontFamily: "Lato, sans-serif",
                            fontWeight: "600",
                          }}
                        >
                          Gallery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
