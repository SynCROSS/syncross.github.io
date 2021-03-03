import styled from 'styled-components';
import Head from 'next/head';

const WorkBlock = styled.div`
  align-items: baseline;
`;

const Work = () => {
  return (
    <WorkBlock>
      <Head>My Works</Head>
      Works
    </WorkBlock>
  );
};

export default Work;
