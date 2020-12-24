import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { useScrollSection } from 'react-scroll-section';
import MouseIcon from '../components/ScrollIcon';
import { useSiteQuery } from '../queries/useSiteQuery';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  const { name, roles, socialLinks, deterministic } = useSiteQuery();
  const aboutSection = useScrollSection('about');

  return (
    <Section.Container id="home">
      {/* <style>{'Section { background-color: black; }'}</style> */}
      <Heading
        textAlign="center"
        as="h1"
        color="black"
        fontWeight="bold"
        fontSize={[150]}
        mb={[3, 4, 5]}
        color={'blue'}
        // style={{backgroundColor:'blue'}}
      >
      
      {/* <style>{{ backgroundColor: 'red'}}</style> */}
      {`PTC HACKS`}
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
      {`hackathon for high school students`}
      </Heading>
      <MouseIcon onClick={aboutSection.onClick} />
    </Section.Container>
  );
};



export default LandingPage;
