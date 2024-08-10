import { ICoffee } from "./page.interface";
import {
  CardContainer,
  CardImageContainer,
  CardRow,
  PopularTag,
} from "./page.styled";

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
      <CardRow>
        <span className="font-semibold text-[#FEF7EE]">{name}</span>
        <div className="text-xs font-semibold text-[#111315] px-2.5 py-1.5 bg-[#BEE3CC] rounded-lg">
          {price}
        </div>
      </CardRow>
      <CardRow>
        <div tw="flex flex-row items-center gap-2">
          <span tw="text-[#FEF7EE] text-xs font-semibold">{rating}</span>
          <span tw="text-[#6F757C] text-[11px]">({votes})</span>
        </div>
        {!available && <span className="text-[#ED735D] text-xs">Sold out</span>}
      </CardRow>
    </CardContainer>
  );
};
