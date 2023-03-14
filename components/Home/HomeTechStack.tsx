import { bindStyle } from 'lib/utility/style';
import Image from 'next/image';

import styles from 'styles/home/HomeTechStack.module.css';

const cx = bindStyle(styles);

// skipcq: JS-D1001
function HomeTechStack() {
  return (
    <section className={cx('home-tech-stack')}>
      <h1 className={cx('tech-stack-title')}>Tech Stack</h1>
      <ul className={cx('flex jc-center ai-center', 'tech-list')}>
        <li className={cx('flex jc-center ai-center', 'tech-list-item')}>
          <Image
            src="https://unpkg.com/simple-icons@v5/icons/mongodb.svg"
            alt="mongodb"
            className={cx('tech-stack-icon')}
            title="mongodb  "
            width={70}
            height={70}
            priority
          />
        </li>
        <li className={cx('flex jc-center ai-center', 'tech-list-item')}>
          <Image
            src="https://unpkg.com/simple-icons@v5/icons/express.svg"
            alt="express"
            className={cx('tech-stack-icon')}
            title="express  "
            width={70}
            height={70}
            priority
          />
        </li>
        <li className={cx('flex jc-center ai-center', 'tech-list-item')}>
          <Image
            src="https://unpkg.com/simple-icons@v5/icons/react.svg"
            alt="react"
            className={cx('tech-stack-icon')}
            title="react  "
            width={70}
            height={70}
            priority
          />
        </li>
        <li className={cx('flex jc-center ai-center', 'tech-list-item')}>
          <Image
            src="https://unpkg.com/simple-icons@v5/icons/nodedotjs.svg"
            alt="nodedotjs"
            className={cx('tech-stack-icon')}
            title="nodedotjs  "
            width={70}
            height={70}
            priority
          />
        </li>
      </ul>
    </section>
  );
}

export default HomeTechStack;
