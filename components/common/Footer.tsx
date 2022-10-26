import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer.attrs(() => ({
  className: 'flex jc-center ai-center',
}))`
  width: 100%;
  background-color: #000;
  color: #eee;
`;

const GithubLink = styled.a`
  margin: 1rem 0;

  color: #ff6683;

  &:hover {
    color: #ff7090;
  }
`;

const year = new Date().getFullYear();

// skipcq: JS-D1001
function Footer(): JSX.Element {
  return (
    <FooterBlock>
      Copyright &copy;&nbsp;
      <span className="year">{year}</span>
      &nbsp;Made by&nbsp;
      <Link href="https://github.com/SynCROSS" passHref>
        <GithubLink target="_blank" rel="noopener noreferrer">
          SynCROSS
        </GithubLink>
      </Link>
    </FooterBlock>
  );
}

export default Footer;
