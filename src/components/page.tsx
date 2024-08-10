import { useEffect, useState } from "react";
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
import coffeeData from "../data/coffee.json";
import { CoffeeCard } from "./page.content";
import { ICoffee } from "./page.interface";

export const CoffePage = () => {
  const [showAll, setShowAll] = useState<boolean>(true);
  const [filteredData, setFilteredData] = useState<ICoffee[]>([]);

  const handleSwitch = () => setShowAll((prev) => !prev);

  useEffect(() => {
    let data: ICoffee[] = coffeeData as ICoffee[];
    if (!showAll) data = data.filter((item) => item.available);
    setFilteredData(data);
  }, [showAll]);

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
            <div className="grid grid-cols-3 gap-6 overflow-y-auto">
              {filteredData.map((item, idx) => (
                <CoffeeCard key={idx} data={item as ICoffee} />
              ))}
            </div>
          </div>
        </ContentWrapper>
      </ContentContainer>
    </MainContainer>
  );
};
