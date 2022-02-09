import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      <Box>
        <SelectItemHeading>SelectItem</SelectItemHeading>
        <SelectItemRow>
          <SelectItemRowTitle>Grey Chair</SelectItemRowTitle>
          <SelectItemRowContent>$19</SelectItemRowContent>
        </SelectItemRow>
        <SelectItemRow>
          <SelectItemRowTitle>Grey Chair</SelectItemRowTitle>
          <SelectItemRowContent>$19</SelectItemRowContent>
        </SelectItemRow>
        <SelectItemRow border>
          <SelectItemRowTitle strong>Total</SelectItemRowTitle>
          <SelectItemRowContent>$10</SelectItemRowContent>
        </SelectItemRow>
        <SelectItemButton>Checkout</SelectItemButton>
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Container>
  );
};
export default Home;

const Container = tw.div`
  bg-slate-300
  py-20
  px-10
  grid
  gap-5
`;

const Box = tw.div`
  bg-white
  p-10
  rounded-3xl 
  shadow-2xl
`;

const SelectItemHeading = tw.span`
  font-semibold
  text-3xl
`;

const SelectItemRow = tw.div<{ border?: boolean }>`
  flex
  justify-between
  mt-2
  ${(p) => (p.border ? 'border-t-2 border-dashed pt-2' : '')}
`;

const SelectItemRowTitle = tw.span<{ strong?: boolean }>`
  ${(p) => (p.strong ? 'text-black' : 'text-gray-500')}
`;

const SelectItemRowContent = tw.span``;

const SelectItemButton = tw.button`
  mt-5 
  bg-blue-500
  text-white
  p-3
  w-1/2
  mx-auto
  block
  text-center
  rounded-xl
`;
