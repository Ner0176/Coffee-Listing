import { ICoffee } from "./page.interface";
import {
  CardContainer,
  CardImageContainer,
  CardRow,
  NameBox,
  PopularTag,
  PriceBox,
  RatingBox,
  RatingContainer,
  SoldOutBox,
  VotesBox,
} from "./page.styled";
import StarIcon from "../assets/Star.svg";
import StarFillIcon from "../assets/Star_fill.svg";

export const CoffeeCard = ({ data }: Readonly<{ data: ICoffee }>) => {
  const { name, image, price, votes, rating, popular, available } = data;
  return (
    <CardContainer>
      <CardImageContainer>
        <img
          alt="coffe"
          src={image}
          className="h-full w-full object-cover rounded-lg"
        />
        {popular && <PopularTag>Popular</PopularTag>}
      </CardImageContainer>
      <div className="flex flex-col gap-1.5">
        <CardRow>
          <NameBox>{name}</NameBox>
          <PriceBox>{price}</PriceBox>
        </CardRow>
        <CardRow>
          <RatingContainer>
            <img
              alt="star"
              className="w-5 h-5"
              src={!votes ? StarIcon : StarFillIcon}
            />
            <RatingBox>{rating}</RatingBox>
            <VotesBox>{!votes ? "No ratings" : `(${votes} votes)`}</VotesBox>
          </RatingContainer>
          {!available && <SoldOutBox>Sold out</SoldOutBox>}
        </CardRow>
      </div>
    </CardContainer>
  );
};
