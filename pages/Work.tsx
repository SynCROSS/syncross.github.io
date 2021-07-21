import styled from 'styled-components';
import Head from 'next/head';

const WorkBlock = styled.div`
  align-items: baseline;
  margin: auto;
`;

const Work = () => {
  return (
    <WorkBlock>
      <Head>
        <title>My Works</title>
      </Head>
      <h1>My Works</h1>
    </WorkBlock>
  );
};

export default Work;
