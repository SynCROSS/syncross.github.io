import { bindStyle } from 'lib/utility/style';
import Image from 'next/image';

import styles from 'styles/home/HomeIntroduce.module.css';

const cx = bindStyle(styles);

// skipcq: JS-D1001
function HomeIntroduce() {
  return (
    <section className={cx('flex ai-center jc-center', 'home-introduce')}>
      <div className={cx('flex ai-center jc-center', 'intro-wrapper')}>
        <div className={cx('intro')}>
          <h1 className={cx('intro-title')}>About Me</h1>
          <p className={cx('intro-description')}>
            Oh hi there! My name is SynCROSS, <br />
            Frontend Developer and boy do I love learning new things. <br />
            I&apos;ve amassed a great deal of skills due to my passion for
            constantly learning new languages, frameworks, and other
            technologies. I have experience with: NextJS, TypeScript, Express,
            NestJS, MongoDB, MySQL, Oracle, Spring Boot.
          </p>
        </div>
        <Image
          src="/icon.svg"
          className={cx('profile-icon')}
          width={300}
          height={300}
          alt="SynCROSS"
          priority
        />
      </div>
    </section>
  );
}

export default HomeIntroduce;
