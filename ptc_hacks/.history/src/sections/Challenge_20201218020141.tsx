import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Project from '../components/Project';
import { useProjectsQuery } from '../queries/useProjectsQuery';

const Challenge = () => {
  const challenges = useProjectsQuery();

  return (
    <Section.Container id="challenges">
      <Section.Header name="CHALLENGES" 
        style={{}}
      />

      <CardContainer minWidth="350px">
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
