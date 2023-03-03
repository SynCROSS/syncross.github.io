import Image from 'next/image';
import { Children } from 'react';

const techStacks = ['mongodb', 'express', 'react', 'nodedotjs'];

// skipcq: JS-D1001
function HomeTechStack() {
  return (
    <section className="home-tech-stack">
      <h1 className="tech-stack-title">Tech Stack</h1>
      <ul className="flex jc-center ai-center tech-list">
        {Array.isArray(techStacks) &&
          Children.toArray(
            techStacks.map(techStack => (
              <li className="flex jc-center ai-center tech-list-item">
                <Image
                  src={`https://unpkg.com/simple-icons@v5/icons/${techStack}.svg`}
                  alt={techStack}
                  title={techStack}
                  width={70}
                  height={70}
                  loading="lazy"
                />
              </li>
            )),
          )}
      </ul>
      <style jsx>
        {`
          .home-tech-stack,
          .tech-stack-title {
            margin: 2rem auto;
          }
          .tech-stack-title {
            font-size: 3rem;
          }
          .tech-list {
            flex-wrap: wrap;
            flex-direction: column;
            list-style: none;
          }
          .tech-list-item {
            border-radius: 50%;
            background: #f8f8f8;
            box-shadow: 10px 10px 20px #cccccc, -10px -10px 20px #ffffff;
            width: 7rem;
            height: 7rem;
            margin: 1rem;
          }
          @media (prefers-reduced-motion: no-preference) {
            .tech-list-item {
              transition: all 0.2s ease-in-out;
            }
          }
          @media (hover: hover) {
            .tech-list-item:hover {
              background-color: #eee;
            }
          }
        `}
      </style>
    </section>
  );
}

export default HomeTechStack;
