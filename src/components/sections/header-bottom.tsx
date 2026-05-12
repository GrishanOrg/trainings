/* eslint-disable @next/next/no-img-element */

const navItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Problem", href: "#problem" },
  { id: 3, label: "Result", href: "#result" },
  { id: 4, label: "LMS", href: "#lms" },
];

export function HeaderBottom() {
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
                        <a href="#home">
                          <img src="/img/logo_256.png" alt="Interactive Trainings logo" />
                        </a>
                      </div>
                      <div className="main-header-one__bottom-menu">
                        <div className="main-menu__main-menu-box">
                          <button
                            className="mobile-nav__toggler"
                            type="button"
                            aria-label="Open navigation"
                          >
                            Menu
                          </button>
                          <ul className="main-menu__list">
                            {navItems.map((item) => (
                              <li key={item.id}>
                                <a href={item.href}>{item.label}</a>
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
