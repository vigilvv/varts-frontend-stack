import styled from "styled-components";
import { SiteLogoText } from "./SiteLogoText.tsx";

export const Header = () => {
  return (
    <Wrapper>
      <SiteLogoText />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  /* width: 100%; */
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: var(--pink);

  margin-bottom: 10px;
`;
