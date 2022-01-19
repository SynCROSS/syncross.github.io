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
  color: #ffaaff;

  &:hover {
    color: #ff1740;
  }
`;

const Footer = () => {
  return (
    <FooterBlock className="flex jc-center ai-center flex-direction-col">
      <p>
        Copyright &copy;&nbsp;
        <span className="year">{new Date().getFullYear()}</span>&nbsp;Made
        by&nbsp;
        <Link href="http://github.com/SynCROSS" passHref>
          <GithubLink target="_blank" rel="noopener noreferrer">
            SynCROSS
          </GithubLink>
        </Link>
      </p>
    </FooterBlock>
  );
};

export default Footer;
