import React from 'react';
import { Heading, Text, Box, Image, Flex, Button } from 'rebass/styled-components';

import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { useAboutMeQuery } from '../queries/useAboutMeQuery';


const About = () => {
  const { markdown, profile } = useAboutMeQuery();

  return (
    <Section.Container id="about">
      <Heading
        textAlign="center"
        as="h1"
        color="white"
        fontWeight="bold"
        fontSize={[150]}
        mb={[3, 4, 5]}
      >
      {`CODE FOR COVID`}
      </Heading>

      <Heading
        as="h2"
        color="white"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
      >
      {`PTC is a student-run nonprofit that runs events for high school and middle school 
      students on topics in tech. In order to provide more opportunities for students, PTC 
      will be launching PTC Hacks this year!`}
      </Heading>

    <Button>SIGN UP</Button>
    </Section.Container>
  );
};

export default About;
