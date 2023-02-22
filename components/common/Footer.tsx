import Link from 'next/link';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type CenteredFooterProps = PropsWithChildren<{
  className?: HTMLAttributes<HTMLElement>['className'];
}>;

const CenteredFooter: FC<CenteredFooterProps> = function CenteredFooter({
  children,
  className = '',
}) {
  return (
    <footer className={`flex jc-center ai-center ${className}`}>
      {children}
    </footer>
  );
};

CenteredFooter.defaultProps = {
  className: '',
};

const FooterBlock = styled(CenteredFooter)`
  width: 100%;
  background-color: #000;
  color: #eee;
`;

const GithubLink = styled(Link)`
  margin: 1rem 0;

  color: #ff6683;

  @media (hover: hover) {
    &:hover {
      color: #ff94a8;
    }
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
