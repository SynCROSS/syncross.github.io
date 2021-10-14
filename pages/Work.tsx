import styled from 'styled-components';
import Head from 'next/head';

const WorkBlock = styled.div`
  align-items: baseline;
  margin: auto;
`;

const Work = ({ data }) => {
  return (
    <WorkBlock>
      <Head>
        <title>My Works</title>
      </Head>
      <h1>My Works</h1>
      <div style={{ margin: '2rem auto' }}>
        {data ? <p>There is a Data.</p> : <p>Oops! There is No Works.</p>}
      </div>
    </WorkBlock>
  );
};

export default Work;
