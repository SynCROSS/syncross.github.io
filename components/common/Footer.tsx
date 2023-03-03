import Link from 'next/link';

import css from 'styled-jsx/css';

const year = new Date().getFullYear();

const { className, styles } = css.resolve`
  a {
    margin: 1rem 0;

    color: #ff6683;
  }
  @media (hover: hover) {
    a:hover {
      color: #ff94a8;
    }
  }
`;

// skipcq: JS-D1001
function Footer() {
  return (
    <footer className="flex jc-center ai-center footer-block">
      Copyright &copy;&nbsp;
      <span className="year">{year}</span>
      &nbsp;Made by&nbsp;
      <Link
        className={className}
        href="https://github.com/SynCROSS"
        target="_blank"
        rel="noopener noreferrer"
      >
        SynCROSS
      </Link>
      <style jsx>
        {`
          .footer-block {
            width: 100%;
            background-color: #000;
            color: #eee;
          }
        `}
      </style>
      {styles}
    </footer>
  );
}

export default Footer;
