import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MovingComponent from "react-moving-text";
import { Dropdown } from "flowbite-react";
import HamburgerDrawer from "react-hamburger-drawer";
import CartContext from "../context/CartContext";
import logo from "../assets/images/logo.svg";


function NavBarSticky(props) {
  const [CurrentStuff, setCurrentStuff] = useState(0);
  setTimeout(() => {
    if (CurrentStuff == 5) setCurrentStuff(0);
    else setCurrentStuff(CurrentStuff + 1);
  }, 2000);
  const stuff = [
    "IN TOUCH",
    "TOGETHER",
    "FOREVER",
    "CREATIVE",
    "STARTED",
    "LOUD",
  ];
  const { toggleSearchView } = props;

  const [menuVisible, setMenuVisibility] = useState(false);
  const [cartItems] = useContext(CartContext);

  const toggleMenuVisibility = () => {
    setMenuVisibility(() => !menuVisible);
  };

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  useEffect(() => {
    const windowHideMenuClick = (e) => {
      if (!e.target.closest(".nav")) hideMenu();
    };

    const windowHideMenuEsc = (e) => {
      if (e.key === "Escape") hideMenu();
    };

    window.addEventListener("click", windowHideMenuClick);
    window.addEventListener("keydown", windowHideMenuEsc);

    return () => {
      window.removeEventListener("click", windowHideMenuClick);
      window.removeEventListener("keydown", windowHideMenuEsc);
    };
  }, []);

  return (
    <div className="w-full">
      <motion.nav
        className="nav nav--sticky hidden sm:flex justify-between px-5 bg-none absolute z-10  top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "tween" }}
      >
        <script src="../path/to/flowbite/dist/flowbite.min.js" />{" "}
        <button
          type="button"
          className="material-symbols-outlined nav__btn-menu"
          onClick={toggleMenuVisibility}
          data-testid="menu-btn"
        >
          menu
        </button>
        <Link to="/" className="nav__logo no-underline">
          <div className="gap-10 pt-10 Courier">
            <img src={logo} alt="" className="w-[15vh]" />
          </div>
        </Link>
        <ul className="nav__links text-white Courier">
          {/* <NavLink]}
          to="/products"
          className="nav__link
          "
        >
          Stories
        </NavLink> */}

          <Dropdown
            label="Stories"
            color="transperant"
            theme={{ floating: { target: "w-full" } }}
          >
            <Dropdown.Item>
              <NavLink to="/photostories" className="Courier">
                Photos
              </NavLink>{" "}
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/videostories" className=" Courier">
                Videos
              </NavLink>{" "}
            </Dropdown.Item>
          </Dropdown>
          <ul className="nav__links text-white Courier">
            <NavLink
              to="/aboutus"
              className=" Courier text-sm whitespace-nowrap"
            >
              About us
            </NavLink>
            <NavLink to="/aboutus" className=" Courier text-sm ">
              FAQs
            </NavLink>
          </ul>
          <Dropdown
            label="More"
            color="transperant"
            theme={{ floating: { target: "w-full" } }}
          >
            <Dropdown.Item>
              <NavLink
                to="/testimonials"
                className="Courier text-sm
              "
              >
                Testimonials
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink
                to="/blogs"
                className="Courier text-sm
              "
              >
                Blog
              </NavLink>{" "}
            </Dropdown.Item>
          </Dropdown>
        </ul>
        <div className=" flex flex-row bg-[#ffca00] h-[34px] p-3 w-[145px] rounded text-black cursor-pointer sticky top-5">
          {/* <Link
          to="/cart"
          className="nav__btn-icon icon__shopping-bag material-symbols-outlined"
          >
          shopping_bag
          {cartItems.length > 0 && (
            <div className="cart-badge">{cartItems.length}</div>
          )}
        </Link> */}
          <span className="mr-2 Boldy flex items-center justify-center">
            GET{" "}
          </span>
          <div
            className="flex items-center justify-center Boldy"
            key={CurrentStuff}
          >
            <MovingComponent
              id="moving"
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="none"
            >
              {stuff[CurrentStuff]}
            </MovingComponent>
          </div>
        </div>
        <AnimatePresence>
          {menuVisible && (
            <motion.nav
              className="nav-menu"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1, originY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ type: "tween" }}
              data-testid="menu-dropdown"
            >
              <ul className="nav-menu__links">
                <NavLink
                  to="/products"
                  className="nav-menu__link
                "
                >
                  Collection
                </NavLink>
                <NavLink
                  to="/products/black"
                  className="nav-menu__link
                "
                >
                  black
                </NavLink>
                <NavLink
                  to="/products/white"
                  className="nav-menu__link
                "
                >
                  white
                </NavLink>

                <NavLink
                  to="/about"
                  className="nav-menu__link
                "
                >
                  About us
                </NavLink>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.nav>

      <motion.nav
        className="nav nav--sticky flex flex-1 w-full sm:hidden justify-between px-2 bg-none absolute z-10  top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "tween" }}
      >
        <div className=" flex flex-row">
        <div className="flex flex-1 mr-auto">
        <Link to="/" className="nav__logo no-underline">
          <div className="gap-10 pt-10 Courier">
            <img src={logo} alt="" className="w-[10vh]" />
          </div>
        </Link>
        
        <div className="flex flex-row">
          <div className=" flex flex-row bg-[#ffca00] h-[34px] p-2 w-[140px] rounded text-black cursor-pointer sticky top-5 mr-3">
            <span className="mr-2 Boldy flex items-center justify-center">
              GET{" "}
            </span>
            <div
              className="flex items-center justify-center Boldy"
              key={CurrentStuff}
            >
              <MovingComponent
                id="moving"
                type="fadeInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease-in-out"
                iteration="1"
                fillMode="none"
              >
                {stuff[CurrentStuff]}
              </MovingComponent>
            </div>
          </div>
          
        </div>
        </div>
        <div className=" flex ml-auto">
         <HamburgerDrawer className= " flex flex-1 h-4 w-4">
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
      </ul>
    </HamburgerDrawer>
        </div>
        </div>
      </motion.nav>
    </div>
  );
}

NavBarSticky.propTypes = {
  toggleSearchView: PropTypes.func.isRequired,
};

export default NavBarSticky;