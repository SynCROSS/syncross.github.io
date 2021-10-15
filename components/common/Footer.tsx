import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  width: 100%;
  padding: 20px 50px;
  background-color: #333;
  color: #eee;
`;

const GithubLink = styled.a`
  color: #dc143c;
  &:hover {
    color: #ff2970;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterBlock className="flex jc-center ai-center flex-direction-col">
      <p>
        Copyright &copy;&nbsp;<span className="year">{year}</span>&nbsp;Made
        by&nbsp;
        <GithubLink
          href="http://github.com/SynCROSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          SynCROSS
        </GithubLink>
      </p>
    </FooterBlock>
  );
};

export default Footer;
