import { bindStyle } from 'lib/utility/style';
import Link from 'next/link';
import styles from 'styles/common/NavigationList.module.css';

const cx = bindStyle(styles);

// skipcq: JS-D1001
function NavigationList() {
  return (
    <ul className={cx('item-list')}>
      <li className={cx('link-item')}>
        <Link href="/">Home</Link>
      </li>
      <li className={cx('link-item')}>
        <Link href="/About">About</Link>
      </li>
      <li className={cx('link-item')}>
        <Link href="/Work">My Works</Link>
      </li>
    </ul>
  );
}
export default NavigationList;
