import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../Logo";
import NavItems from "./NavItems";

const NavbarContainer = styled.div`
  ${tw`
        w-full max-w-screen-2xl flex flex-row items-center px-2 lg:px-12 justify-between
    `}
`;

const LogoContainer = styled.div``;
const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
};

export default Navbar;
