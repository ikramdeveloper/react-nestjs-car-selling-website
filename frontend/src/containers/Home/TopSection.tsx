import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import MclarenCarImg from "../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../assets/images/blob.svg";
import { SCREENS } from "../../components/Responsive";

const TopSectionContainer = styled.div`
  ${tw`
    w-full max-w-screen-2xl flex justify-between px-3 lg:px-12 min-h-[500px] mt-24
  `}
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2 flex flex-col text-left
  `}
`;
const RightContainer = styled.div`
  ${tw`
    w-1/2 flex flex-col relative mt-20
  `}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold text-2xl sm:text-3xl md:text-5xl xl:text-6xl md:font-bold lg:font-extrabold text-black mb-4 sm:leading-snug lg:leading-normal xl:leading-relaxed
  `}
`;

const Description = styled.p`
  ${tw`
    text-xs md:text-sm lg:text-lg sm:max-h-full overflow-hidden max-h-12 text-gray-800
  `}
`;

const BlobContainer = styled.div`
  transform: rotate(-30deg);
  z-index: -1;

  ${tw`
    w-80 h-40 absolute -right-20 -top-36
  `} img {
    ${tw`
      w-full h-auto
    `}
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    transform: rotate(-25deg);
    ${tw`
      w-[40em] max-h-40 -right-36 -top-64
    `}
  }
  @media (min-width: ${SCREENS.lg}) {
    transform: rotate(-30deg);
    ${tw`
      w-[50em] max-h-[120em] -right-28 -top-60 
    `}
  }
  @media (min-width: ${SCREENS.xl}) {
    transform: rotate(-20deg) ${tw`
      w-[70rem] max-h-[30rem] -right-60 -top-96 
    `};
  }
`;

const StandaloneCar = styled.div`
  ${tw`
    w-auto h-40 -right-20 -top-36 absolute
  `}

  img {
    ${tw`
      w-auto h-full
    `}
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    ${tw`
      h-[16em] -right-24 -top-24
    `}
  }
  @media (min-width: ${SCREENS.lg}) {
    ${tw`
      h-[21em] -right-32 -top-20
    `}
  }
  @media (min-width: ${SCREENS.xl}) {
    ${tw`
      h-[30em] right-[-13em] -top-36
    `}
  }
`;

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Car's With Us</Slogan>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minus
          cumque molestias nostrum, minima beatae quisquam harum architecto
          culpa excepturi nihil ab dolorem et praesentium, a quis rem amet.
          Dolore.
        </Description>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="blob" />
        </BlobContainer>
        <StandaloneCar>
          <img src={MclarenCarImg} alt="mclaren" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
