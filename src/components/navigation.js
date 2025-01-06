import React, { Component } from "react";
import GlobalStyles from "../styles/GlobalStyle";
import "./style.css";
import { CgMenuCheese } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      showNav: true,
      activeSection: "#home",
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.setActiveSection = this.setActiveSection.bind(this);
  }

  toggleNav() {
    this.setState((prevState) => ({
      showNav: !prevState.showNav,
    }));
  }

  setActiveSection(section) {
    this.setState({
      activeSection: section,
      showNav: false,
    });
  }

  render() {
    const { showNav, activeSection } = this.state;

    return (
      <>
        <GlobalStyles />
        <div className="NavigationStyle">
          <div
            className="mobile-menu-icon"
            onClick={this.toggleNav}
            role="button"
            tabIndex={0}
            onKeyDown={this.toggleNav}
          >
            <CgMenuCheese />
          </div>

          <ul className={`NavItems ${showNav ? "navItems hide-item" : ""}`}>
            <div
              className="CloseNavigation"
              onClick={this.toggleNav}
              role="button"
              tabIndex={0}
              onKeyDown={this.toggleNav}
            >
              <IoMdClose />
            </div>

            <li>
              <a
                href="#home"
                onClick={() => this.setActiveSection("#home")}
                className={activeSection === "#home" ? "active" : ""}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => this.setActiveSection("#about")}
                className={activeSection === "#about" ? "active" : ""}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => this.setActiveSection("#projects")}
                className={activeSection === "#projects" ? "active" : ""}
              >
                PROJECT
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => this.setActiveSection("#contact")}
                className={activeSection === "#contact" ? "active" : ""}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
