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

      <BlueBox>
        <ProfileHeader>
          <ProfileTitle>Profile</ProfileTitle>
        </ProfileHeader>
        <ProfileContent>
          <ProfileAvatar />
          <ProfileStats>
            <ProfileStat>
              <ProfileStatTitle>Orders</ProfileStatTitle>
              <ProfileStatText>340</ProfileStatText>
            </ProfileStat>

            <ProfileStat>
              <ProfileStatTitle>Spent</ProfileStatTitle>
              <ProfileStatText>$2,310</ProfileStatText>
            </ProfileStat>
          </ProfileStats>
          <ProfileInfo>
            <ProfileName>Tony Molloy</ProfileName>
            <ProfileLocation>New York, USA</ProfileLocation>
          </ProfileInfo>
        </ProfileContent>
      </BlueBox>

      <Box>
        <ProductHeader>
          <ProductBack>⬅</ProductBack>
          <ProductActions>
            <ProductStar>★</ProductStar>
            <ProductRate>4.9</ProductRate>
            <ProductHeart>♥</ProductHeart>
          </ProductActions>
        </ProductHeader>
        <ProductThumbnail></ProductThumbnail>
        <ProductName>Swoon Lounge</ProductName>
        <ProductCategory>Chair</ProductCategory>
        <ProductOptions>
          <ProductColors>
            <ProductYellowRing />
            <ProductIndigoRing />
            <ProductTealRing />
          </ProductColors>

          <div>
            <ProductToggle>-</ProductToggle>
            <ProductQuantity>1</ProductQuantity>
            <ProductToggle>+</ProductToggle>
          </div>
        </ProductOptions>

        <ProductFooter>
          <ProductPrice>$450</ProductPrice>
          <ProductButton>Add to cart</ProductButton>
        </ProductFooter>
      </Box>
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
  p-6
  rounded-3xl 
  shadow-2xl
`;

const BlueBox = tw.div`
  bg-blue-500 
  rounded-3xl 
  shadow-2xl
`;

const SelectItemHeading = tw.span`
  font-semibold
  text-2xl
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

const SelectItemRowContent = tw.span`
  font-medium
`;

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
  hover:bg-teal-500
  active:bg-yellow-500
  focus:text-red-500
`;

const ProfileHeader = tw.div`
  flex
  justify-between
  p-6
  pb-14
`;

const ProfileTitle = tw.span`
  text-white
  text-semibold
  text-2xl
`;

const ProfileContent = tw.div`
  bg-white
  rounded-3xl
  relative
  p-6
  flex
  flex-col
`;

const ProfileAvatar = tw.div`
  w-24
  h-24
  rounded-full
  bg-blue-100
  absolute
  -top-12
  self-center
`;

const ProfileStats = tw.div`
  flex
  items-center
  justify-between
`;

const ProfileStat = tw.div`
  text-center
  flex
  flex-col
`;

const ProfileStatTitle = tw.span`
  text-gray-500
  text-sm
`;

const ProfileStatText = tw.span`
  font-medium
`;

const ProfileInfo = tw.div`
  mt-5
  flex
  flex-col
  items-center
`;

const ProfileName = tw.span`
  font-semibold
  text-xl
`;

const ProfileLocation = tw.span`
  text-gray-500
  text-lg
`;

const ProductHeader = tw.div`
  flex
  justify-between
  items-center
`;

const ProductBack = tw.span`
  text-lg
`;

const ProductActions = tw.div``;

const ProductStar = tw.span`
  text-sm
  text-yellow-500
`;

const ProductRate = tw.span`
  text-sm
  font-medium
  ml-1
`;

const ProductHeart = tw.span`
  text-lg
  text-pink-400
  ml-2
  shadow-md
  p-1
  rounded-md
`;

const ProductThumbnail = tw.div`
  aspect-square
`;

const ProductName = tw.span`
  text-md
  font-semibold
  block
`;

const ProductCategory = tw.span`
  text-sm
  text-gray-500
  block
`;

const ProductOptions = tw.div`
  flex
  items-center
  justify-between
  mt-3
`;

const ProductColors = tw.div`
  space-x-3
`;

const ProductYellowRing = tw.button`
  rounded-full
  w-5
  h-5
  bg-yellow-500
`;

const ProductIndigoRing = tw.button`
  rounded-full
  w-5
  h-5
  bg-indigo-500
`;

const ProductTealRing = tw.button`
  rounded-full
  w-5
  h-5
  bg-teal-500
`;

const ProductToggle = tw.button`
  bg-slate-100
  text-black
  text-lg
  w-8
  h-8
  rounded-md
`;

const ProductQuantity = tw.span`
  mx-3
  font-semibold
  text-lg
`;

const ProductFooter = tw.div`
  flex
  items-center
  justify-between
  mt-5
`;

const ProductPrice = tw.span`
  text-2xl
  font-semibold
`;

const ProductButton = tw.button`
  bg-blue-500
  text-white
  rounded-xl
  p-3
  w-1/2
`;
