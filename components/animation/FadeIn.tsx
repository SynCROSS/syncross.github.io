import gsap from 'gsap';
import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { useEffect } from 'react';

const FadeInBlock = styled.div`
  /*  */
`;

type FadeInProps = {
  children: JSX.Element | JSX.Element[];
  stagger: number;
  x: number;
  className?: string;
  style?: CSSProperties;
};

const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, stagger = 0, x = 0 }, ref) => {
    const element = useRef<HTMLDivElement>(null);
    const animation = useRef(null);

    useLayoutEffect(() => {
      animation.current = gsap.from(element.current.children, {
        opacity: 0,
        stagger,
        x,
      });
    }, []);

    useEffect(() => {
      if (typeof ref === 'function') {
        ref(animation.current);
      } else if (ref) {
        ref.current = animation.current;
      }
    }, [ref]);

    return <FadeInBlock ref={element}>{children}</FadeInBlock>;
  },
);

export default FadeIn;
