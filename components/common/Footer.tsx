import classNames from 'classnames';
import Link from 'next/link';

const year = new Date().getFullYear();

// skipcq: JS-D1001
function Footer() {
  return (
    <footer
      className={classNames(
        'bg-black text-neutral-100 py-4 text-center',
        'min-[2560px]:text-2xl',
        'min-[3840px]:text-5xl',
      )}
    >
      Copyright &copy;&nbsp;
      <span>{year}</span>
      &nbsp;Made by&nbsp;
      <Link
        className={'text-[#ff6683] hover:text-[#ff94a8]'}
        href="https://github.com/SynCROSS"
        target="_blank"
        rel="noopener noreferrer"
      >
        SynCROSS
      </Link>
    </footer>
  );
}

export default Footer;
