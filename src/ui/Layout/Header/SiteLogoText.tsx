import styled from "styled-components";
import sampleLogoImgUrl from "/assets/sample_panda_site_logo.png";
import { Link } from "react-router";

export const SiteLogoText = () => {
  return (
    <Wrapper to="/">
      <LogoImg src={sampleLogoImgUrl} alt="Sample logo" />
      <SiteNameText>AwesomeWebsite</SiteNameText>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 1px; */
`;

const LogoImg = styled.img`
  width: 42px;
  height: 42px;
`;

const SiteNameText = styled.h1`
  color: var(--orange);
  font-family: Poppins, Roboto, sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  letter-spacing: -0.5px;

  margin-left: -6px;
`;
