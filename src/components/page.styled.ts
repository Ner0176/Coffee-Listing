import tw from "twin.macro";
import styled from "styled-components";

export const MainContainer = styled.div(tw`w-screen h-screen bg-[#111315]`);
export const ImageContainer = styled.div(tw`w-full h-[250px]`);
export const ContentContainer = styled.div(
  tw`flex items-center justify-center absolute z-20 inset-0`
);
export const ContentWrapper = styled.div(
  tw`w-[90%] h-[75%] bg-[#1B1D1F] rounded-lg`
);
export const ContentHeader = styled.div(tw`flex flex-col items-center gap-3`);
export const ContentTitle = styled.span(
  tw`text-3xl font-semibold text-[#FEF7EE]`
);
export const ContentInfo = styled.span(
  tw`text-sm text-center text-[#6F757C] max-w-[450px]`
);
export const SwitchButton = styled.div<{ isSelected: boolean }>`
  ${tw`text-sm text-[#FEF7EE] rounded-lg py-2 px-4 cursor-pointer`}
  ${({ isSelected }) => (isSelected ? tw`bg-[#6F757C]` : tw``)}
`;
export const CardContainer = styled.div(tw`flex flex-col gap-3 max-w-[300px]`);
export const CardImageContainer = styled.div(tw`relative w-full h-[200px]`);
export const PopularTag = styled.div(
  tw`absolute z-20 bottom-1.5 right-1.5 text-red-500`
);
export const CardRow = styled.div(
  tw`flex flex-row justify-between items-center`
);
