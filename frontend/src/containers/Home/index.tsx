import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components";
import TopSection from "./TopSection";

const PageContainer = styled.div`
  ${tw`
    flex flex-col w-full h-full items-center overflow-x-hidden
    `}
`;

const Home = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
    </PageContainer>
  );
};
export default Home;
