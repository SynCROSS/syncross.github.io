import Link from 'next/link';
import styled from 'styled-components';

const FooterBlock = styled.footer`
  width: 100%;
  background-color: #000;
  color: #eee;
`;

const GithubLink = styled(Link)`
  margin: 1rem 0;

  color: #ff6683;

  &:hover {
    color: #ff94a8;
  }
`;

const year = new Date().getFullYear();

// skipcq: JS-D1001
function Footer(): JSX.Element {
  return (
    <FooterBlock className="flex jc-center ai-center">
      Copyright &copy;&nbsp;
      <span className="year">{year}</span>
      &nbsp;Made by&nbsp;
      <GithubLink
        href="https://github.com/SynCROSS"
        target="_blank"
        rel="noopener noreferrer"
      >
        SynCROSS
      </GithubLink>
    </FooterBlock>
  );
}

export default Footer;
