import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faEye,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  FlexFunc,
  color_dark,
  color_subtle,
  color_pink,
  color_green,
  color_light,
  mobile,
} from "../styles";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faUserCircle} />
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 20px;
  padding: 0.5rem 2rem;
  color: ${color_light};
  background: ${color_green};
  display: flex;
  @media ${mobile} {
    flex-direction: column;
    bottom: 0;
    top: auto;
  }
  ul {
    margin: 0;
  }
  li {
    list-style-type: none;
    text-align: center;
    height: 30px;
    width: 100%;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: ${color_light};
  }
`;

// const NavBar = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
// `;

// const NavName = styled.div`
//   font-weight: bold;
//   letter-spacing: 2px;
// `;

// const ShortcutContainer = styled.div`
//   ${FlexFunc("column", "flex-start", "center")}

//   transition: all 0.5s linear;

//   @media ${mobile} {
//     max-height: ${(props) => (props.menuVisible ? "800px" : "0")};
//     ${FlexFunc("column", "flex-start", "center")}
//   }
// `;

// const MenuButton = styled.button`
//   color: ${color_light};
//   background: none;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 1.4rem;
//   display: none;
//   @media ${mobile} {
//     display: flex;
//   }
// `;

// const ShortcutButton = styled.button`
//   color: ${color_light};
//   background: none;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   text-decoration: none;
//   position: relative;
//   padding: 1rem;

//   &::before {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 2px;
//     bottom: 0;
//     left: 0;
//     background-color: ${color_subtle};
//     visibility: hidden;
//     transform: scaleX(0);
//     transition: all 0.3s ease-in-out 0s;
//   }

//   &:hover::before {
//     visibility: visible;
//     transform: scaleX(1);
//   }

//   a {
//     text-decoration: none;
//     color: ${color_subtle};
//   }
// `;

// const HeaderBottom = styled.div`
//   width: 100%;
//   height: 4px;
//   background: ${color_pink};
//   background: linear-gradient(
//     90deg,
//     rgb(155, 206, 215) 30%,
//     rgb(241, 202, 147) 100%
//   );
//   position: absolute;
//   bottom: 0;
//   left: 0;
// `;

export default Nav;
