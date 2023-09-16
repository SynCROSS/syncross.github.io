import classNames from 'classnames';
import Image from 'next/image';

// skipcq: JS-D1001
function HomeIntroduce() {
  return (
    <section
      className={
        'flex min-h-screen w-full items-center justify-center bg-neutral-950 text-start text-neutral-50'
      }
    >
      <div
        className={classNames(
          'flex w-[80%] items-center justify-center ',
          'max-[640px]:mx-auto max-[640px]:my-20 max-[640px]:flex-wrap-reverse',
          'sm:mx-0 sm:my-12',
          'md:my-20',
          'max-lg:flex-wrap-reverse',
          'lg:flex-nowrap',
          'xl:w-3/5',
        )}
      >
        <div className={classNames('mr-0 mt-8 flex-1', 'md:mt-0')}>
          <h1
            className={classNames(
              'mb-4 text-5xl font-medium',
              'max-[640px]:text-4xl',
              'min-[2560px]:text-7xl',
              'min-[3840px]:text-8xl',
            )}
          >
            About Me
          </h1>
          <p
            className={classNames(
              'py-0 text-neutral-400',
              'md:w-[90%]',
              'min-[2560px]:text-2xl',
              'min-[3840px]:text-3xl',
            )}
          >
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
          className={classNames(
            'aspect-square h-full w-full flex-1 rounded-full',
            'md:h-1/2 md:w-1/2',
            'lg:max-w-[35%]',
            'min-[2560px]:max-w-[30%]',
            'min-[3840px]:max-w-[25%]',
          )}
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
