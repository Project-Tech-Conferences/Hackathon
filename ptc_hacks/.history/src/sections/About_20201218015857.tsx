import React from 'react';
import { Heading, Text, Box, Image, Flex, Button } from 'rebass/styled-components';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { useAboutMeQuery } from '../queries/useAboutMeQuery';
import { BackgroundColor } from 'chalk';
import MouseIcon from '../components/ScrollIcon';

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

      {/* <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {socialLinks.map((sl) => (
          <Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
            <SocialLink {...sl} />
          </Box>
        ))}
      </Flex> */}
    <Button>SIGN UP</Button>
    </Section.Container>
  );
};

export default About;
