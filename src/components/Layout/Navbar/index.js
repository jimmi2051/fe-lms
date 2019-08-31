import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthStorage from "utils/AuthStorage";
import { Link } from "react-router-dom";
import { logoutRequest } from "redux/action/auth";
function mapStateToProps(state) {
  return {
    store: {
      auth: state.auth
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    action: bindActionCreators({ logoutRequest }, dispatch)
  };
};

class Navbar extends Component {
  componentDidMount() {}
  logout = () => {
    this.props.action.logoutRequest();
  };
  render() {
    return (
      <header className="site-header">
        <div className="top-header-bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-5 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <div className="header-bar-email d-flex align-items-center">
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:'admin@gmail.com'">admin@gmail.com</a>
                </div>
                <div className="header-bar-text lg-flex align-items-center">
                  <p>
                    <i className="fa fa-phone"></i>001-1234-88888{" "}
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-7 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                <div className="header-bar-search">
                  <form className="flex align-items-stretch">
                    <input
                      type="search"
                      placeholder="What would you like to learn?"
                    />
                    <button
                      type="submit"
                      value=""
                      className="flex justify-content-center align-items-center"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>

                <div className="header-bar-menu">
                  <ul className="flex justify-content-center align-items-center py-2 pt-md-0">
                    {!AuthStorage.loggedIn ? (
                      <>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/profile">
                            {AuthStorage.userInfo.username}
                          </Link>
                        </li>
                        <li>
                          <Link onClick={this.logout} to="/login">
                            Log out
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <div className="container">
            <div className="row">
              <div className="col-9 col-lg-3">
                <div className="site-branding">
                  <h1 className="site-title">
                    <a href="index.html" rel="home">
                      Ezu<span>ca</span>
                    </a>
                  </h1>
                </div>
              </div>

              <div className="col-3 col-lg-9 flex justify-content-end align-content-center">
                <nav
                  className="site-navigation flex justify-content-end align-items-center"
                  style={{ width: "100%" }}
                >
                  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                    <li className="current-menu-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">blog</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>

                  <div className="hamburger-menu d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="header-bar-cart">
                    <a
                      href="#"
                      className="flex justify-content-center align-items-center"
                    >
                      <span aria-hidden="true" className="icon_bag_alt"></span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);