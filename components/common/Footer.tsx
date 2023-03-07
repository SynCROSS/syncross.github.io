import Link from 'next/link';

import css from 'styled-jsx/css';

const year = new Date().getFullYear();

const { className, styles } = css.resolve`
  a {
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
    <footer className="footer-block">
      <p className="copyright">
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
      </p>
      <style jsx>
        {`
          .footer-block {
            width: 100%;
            background-color: #000;
            color: #eee;
          }
          .copyright {
            margin: 1rem auto;
          }
        `}
      </style>
      {styles}
    </footer>
  );
}

export default Footer;
