import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import Project from '../components/Project';
import { useProjectsQuery } from '../queries/useProjectsQuery';
import { Heading, Text, Box, Image, Flex, Button } from 'rebass/styled-components';

const Faq = () => {
  const Faq = useProjectsQuery();

  return (
    <Section.Container id="faq" >
      <Heading
        textAlign="left"
        as="h1"
        color="white"
        fontWeight="bold"
        fontSize={[150]}
        mb={[3, 4, 5]}
      >
      {`FAQ`}
      </Heading>
      
      {/* <CardContainer minWidth="350px">
        <Fade direction="down" cascade damping={0.5} triggerOnce>
          {Faq.map((p, i) => (
            <Project {...p} key={i} />
          ))}
        </Fade>
      </CardContainer> */}
    </Section.Container>
  );
};



export default Faq;
