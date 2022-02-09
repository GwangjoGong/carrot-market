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
