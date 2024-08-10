import { useState } from "react";
import bgImage from "../assets/bg-cafe.jpg";
import {
  ContentContainer,
  ContentHeader,
  ContentInfo,
  ContentTitle,
  ContentWrapper,
  ImageContainer,
  MainContainer,
  SwitchButton,
} from "./page.styled";

export const CoffePage = () => {
  const [showAll, setShowAll] = useState<boolean>(true);

  const handleSwitch = () => setShowAll((prev) => !prev);

  return (
    <MainContainer>
      <ImageContainer>
        <img
          src={bgImage}
          alt="coffee shop"
          className="h-full w-full object-cover"
        />
      </ImageContainer>
      <ContentContainer>
        <ContentWrapper>
          <div className="flex flex-col gap-4 px-12 py-10">
            <ContentHeader>
              <ContentTitle>Our Collection</ContentTitle>
              <ContentInfo>
                Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in
                small batches and shipped fresh weekly.
              </ContentInfo>
              <div className="flex flex-row gap-2 mt-2">
                <SwitchButton isSelected={showAll} onClick={handleSwitch}>
                  All products
                </SwitchButton>
                <SwitchButton isSelected={!showAll} onClick={handleSwitch}>
                  Available now
                </SwitchButton>
              </div>
            </ContentHeader>
            <div className="grid grid-cols-3"></div>
          </div>
        </ContentWrapper>
      </ContentContainer>
    </MainContainer>
  );
};
