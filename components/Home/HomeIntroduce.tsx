import Image from 'next/image';
import css from 'styled-jsx/css';

// skipcq: JS-D1001
function Intro() {
  return (
    <div className="intro">
      <h1 className="intro-title">Introduce</h1>
      <p className="intro-description">
        Oh hi there! My name is SynCROSS, <br />
        Frontend Developer and boy do I love learning new things. <br />
        I&apos;ve amassed a great deal of skills due to my passion for
        constantly learning new languages, frameworks, and other technologies. I
        have experience with: NextJS, TypeScript, Express, NestJS, MongoDB,
        MySQL, Oracle, Spring Boot.,
      </p>
      <style jsx>
        {`
          .intro {
            margin-right: 5rem;
            margin-top: 0;
          }
          .intro-title {
            font-size: 4rem;
          }
          .intro-description {
            padding: 0 7px;

            color: #acacac;
            font-size: 1.2rem;
          }
          @media only screen and (max-width: 600px) {
            .intro {
              margin-right: 0;
              margin-top: 5rem;
            }
          }
        `}
      </style>
    </div>
  );
}

const { className, styles } = css.resolve`
  img {
    aspect-ratio: 1;
    border-radius: 50%;
  }
`;

// skipcq: JS-D1001
function HomeIntroduce() {
  return (
    <section className="flex ai-center jc-center home-introduce">
      <div className="flex ai-center jc-center intro-wrapper">
        <Intro />
        <Image
          src="/icon.svg"
          className={className}
          width={300}
          height={300}
          alt="SynCROSS"
          loading="lazy"
        />
      </div>
      <style jsx>
        {`
          .home-introduce {
            width: 100%;
            min-height: 100vh;

            text-align: start;
            background-color: #111111;
            color: #fefefe;
          }
          .intro-wrapper {
            width: 60%;
          }
          @media only screen and (max-width: 600px) {
            .intro-wrapper {
              flex-wrap: wrap-reverse;
              margin: 7rem auto;
            }
          }
        `}
      </style>
      {styles}
    </section>
  );
}

export default HomeIntroduce;
