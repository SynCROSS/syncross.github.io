import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  width: 100%;
  padding: 20px 50px;

  hr {
    width: 50%;
    height: 1px;
    background-color: #ccc;
    border: none;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterBlock className="flex jc-center ai-center flex-direction-col">
      <hr />
      <p>
        Copyright &copy;&nbsp;<span className="year">{year}</span>&nbsp;Made
        by&nbsp;
        <a
          href="http://github.com/SynCROSS"
          target="_blank"
          rel="noopener noreferrer">
          SynCROSS
        </a>
      </p>
    </FooterBlock>
  );
};

export default Footer;
