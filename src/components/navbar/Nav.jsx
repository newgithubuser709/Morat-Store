import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// coponents
import "./NavStyle.css";
import "./NavResponsive.css";

const Nav = () => {
  //
  const [TotalResults, setTotalResults] = useState(0);

  const location = useLocation();

  const navigationRef = useRef(null);

  const navigationToggle = () => {
    navigationRef.current.classList.toggle("navigation__Script");
  };

  const { CartsProductList } = useSelector((state) => state.CartSliceKey);

  useEffect(() => {
    const sum = CartsProductList.reduce(
      (initial, items) => initial + items.quantity,
      0
    );

    setTotalResults(sum);
  }, [CartsProductList]);

  const path = import.meta.env.VITE_IMAGE_BASE_PATH;
  return (
    <>
      <header>
        <div className="header">
          <nav>
            <div className="nav_logo__links">
              <div className="logo">
                <Link to="/">
                  <img src="./Logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="header__navigation" ref={navigationRef}>
                <ul>
                  <div className="navigation__close__btn">
                    <div className="icon" onClick={navigationToggle}>
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>

                  <li>
                    <Link to="/Women">
                      <div
                        className={`${
                          location.pathname === "/Women"
                            ? "ancors ancor_Script"
                            : "ancors"
                        }`}
                      >
                        Women<span>&rarr;</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Kids">
                      <div
                        className={`${
                          location.pathname === "/Kids"
                            ? "ancors ancor_Script"
                            : "ancors"
                        }`}
                      >
                        Kids<span>&rarr;</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Men">
                      <div
                        className={`${
                          location.pathname === "/Men"
                            ? "ancors ancor_Script"
                            : "ancors"
                        }`}
                      >
                        Men<span>&rarr;</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/About">
                      <div
                        className={`${
                          location.pathname === "/About"
                            ? "ancors ancor_Script"
                            : "ancors"
                        }`}
                      >
                        About us<span>&rarr;</span>
                      </div>
                    </Link>
                  </li>
                  <li className="ancors__others">
                    <div className="ancors ancors__others__text">
                      Others
                      <span>
                        <i className="fa-solid fa-circle-chevron-down"></i>
                      </span>
                    </div>
                    <div className="hover__box">
                      <div className="hover__box__col hover__box__col_1">
                        <ul>
                          <Link to="/Store">
                            <li>
                              store<span>&rarr;</span>
                            </li>
                          </Link>
                          <li>
                            contact us<span>&rarr;</span>
                          </li>
                          <li>
                            size guide<span>&rarr;</span>
                          </li>
                          <li>
                            shipping<span>&rarr;</span>
                          </li>
                          <li>
                            customer care<span>&rarr;</span>
                          </li>
                          <li>
                            exchange policy<span>&rarr;</span>
                          </li>
                          <li>
                            track your order<span>&rarr;</span>
                          </li>
                          <li>
                            international<span>&rarr;</span>
                          </li>
                          <li>
                            FAQ's<span>&rarr;</span>
                          </li>
                          <li>
                            privacy policy<span>&rarr;</span>
                          </li>
                        </ul>
                      </div>
                      <div className="hover__box__col hover__box__col_2">
                        <ul>
                          <li>
                            Catalogue<span>&rarr;</span>
                          </li>
                          <li>
                            Couture Process<span>&rarr;</span>
                          </li>
                          <li>
                            Traditions<span>&rarr;</span>
                          </li>
                          <li>
                            Charity<span>&rarr;</span>
                          </li>
                          <li>
                            Media and Press<span>&rarr;</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* buttons  */}
            <div className="header__buttons">
              <ul>
                <Link to="/Store">
                  <li
                    className={`${
                      location.pathname === "/Store" ? "ancor_Script" : ""
                    }`}
                  >
                    <img src="./search_icon.png" alt="Search" />
                  </li>
                </Link>

                <Link to="/Login">
                  <li
                    className={`${
                      location.pathname === "/Login" ? "ancor_Script" : ""
                    }`}
                  >
                    <img src="./profile_icon.png" alt="Login" />
                  </li>
                </Link>

                <Link to="/Carts">
                  <li
                    className={`carts_li ${
                      location.pathname === "/Carts" ? "ancor_Script" : ""
                    }`}
                  >
                    <img src="./cart_icon.png" alt="Carts" />
                    <p className="CartsTotalIcon">{TotalResults}</p>
                  </li>
                </Link>

                <li>
                  <img src="./dots_icon.png" alt="Dots-Menu" />
                </li>

                <div className="navigation__toggler__btn">
                  <img
                    src="./menu__icon.png"
                    alt="menu"
                    onClick={navigationToggle}
                  />
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
