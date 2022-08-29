import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  width: 100%;
  padding: 20px 50px;
  background-color: #333;
  color: #eee;
`;

const GithubLink = styled.a`
  color: #ff6683;

  &:hover {
    color: #ff7090;
  }
`;

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <FooterBlock className="flex jc-center ai-center flex-direction-col">
      <p>
        Copyright &copy;&nbsp;
        <span className="year">{year}</span>
        &nbsp;Made by&nbsp;
        <Link href="https://github.com/SynCROSS" passHref>
          <GithubLink target="_blank" rel="noopener noreferrer">
            SynCROSS
          </GithubLink>
        </Link>
      </p>
    </FooterBlock>
  );
}

export default Footer;
