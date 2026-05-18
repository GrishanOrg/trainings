"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Problem", href: "#problem" },
  { id: 3, label: "Result", href: "#result" },
  { id: 4, label: "LMS", href: "#lms" },
];

export function HeaderBottom() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="main-header main-header-one">
      <nav className="main-menu">
        <div className="main-menu__wrapper">
          <div className="container">
            <div className="main-header-one__inner">
              <div className="main-header-one__bottom">
                <div className="main-menu__wrapper-inner">
                  <div className="main-header-one__bottom-inner">
                    <div className="main-header-one__bottom-left">
                      <div className="logo-box">
                        <a href="#home" onClick={closeMenu}>
                          <Image
                            src="/img/logo_draft.png"
                            alt="Interactive Trainings logo"
                            width={446}
                            height={98}
                            priority
                          />
                        </a>
                      </div>
                      <div className="main-header-one__bottom-menu">
                        <div
                          className={`main-menu__main-menu-box${
                            isMenuOpen ? " main-menu__main-menu-box--open" : ""
                          }`}
                        >
                          <button
                            className="mobile-nav__toggler"
                            type="button"
                            aria-controls="main-navigation"
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                            onClick={toggleMenu}
                          >
                            Menu
                          </button>
                          <ul className="main-menu__list" id="main-navigation">
                            {navItems.map((item) => (
                              <li key={item.id}>
                                <a href={item.href} onClick={closeMenu}>
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
