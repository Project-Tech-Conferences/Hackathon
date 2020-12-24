import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Heading, Text, Box, Image, Flex, Button } from 'rebass/styled-components';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Project from '../components/Project';
import { useProjectsQuery } from '../queries/useProjectsQuery';

const Challenge = () => {
  const challenges = useProjectsQuery();

  return (
    <Section.Container id="challenges">
      <Heading
        textAlign="center"
        as="h1"
        color="white"
        fontWeight="bold"
        fontSize={[150]}
        mb={[3, 4, 5]}
      >
      {`CHALLENGES`}
      </Heading>
      <CardContainer minWidth="300px" minHeight="">
        <Fade direction="down" cascade damping={0.5} triggerOnce>
          {challenges.map((p, i) => (
            <Project {...p} key={i} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};


export default Challenge;
