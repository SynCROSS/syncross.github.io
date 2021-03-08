import styled from 'styled-components';

const HomeTechStackBlock = styled.section`
	width: 50%;
	margin: 20px auto;
`;

const TechStackTitle = styled.h1`
	font-size: 3rem;
	margin: 20px auto;
`;

const TechList = styled.ul`
	flex-wrap: wrap;
	list-style: none;
`;

const TechListItem = styled.ul`
	border-radius: 50px;
	background: #f8f8f8;
	box-shadow: 10px 10px 20px #cccccc, -10px -10px 20px #ffffff;
	padding: 20px;
	margin: 1rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #fcfcfc;
		width: 20rem;
	}
`;

const TechListImage = styled.img`
	width: 100px;
	height: 100px;
`;

const HomeTechStack = () => {
	const techStacks = ['mongodb', 'express', 'react', 'node-dot-js'];

	return (
		<HomeTechStackBlock>
			<TechStackTitle>Tech Stack</TechStackTitle>
			<TechList className="flex flex-direction-col">
				{techStacks?.map(techStack => (
					<TechListItem>
						<TechListImage
							key={`${techStack}`}
							src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${techStack}.svg`}
							title={`${techStack}`}
							alt={`${techStack}`}
						/>
					</TechListItem>
				))}
			</TechList>
		</HomeTechStackBlock>
	);
};

export default HomeTechStack;
