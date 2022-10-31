import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogo from "../../assets/images/car-logo.png";

const LogoContainer = styled.div`
  ${tw`
    flex items-center 
  `}
`;
const LogoText = styled.div`
  ${tw`
    text-xl md:text-2xl font-bold text-black m-1
  `}
`;

const Image = styled.div`
  width: auto;
  ${tw`
    h-6
  `}

  img {
    width: auto;
    height: 100%;
  }
`;
const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogo} alt="car-logo" />
      </Image>
      <LogoText>YourCar.</LogoText>
    </LogoContainer>
  );
};

export default Logo;
