import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import { useMediumQuery } from '../queries/useMediumQuery';
import { Post } from '../components/Post';
import { Heading, Text, Box, Image, Flex, Button } from 'rebass/styled-components';

const Sponsorship = () => {
  const { posts } = useMediumQuery();

  return (
    <Section.Container id="Sponsorship" >
            <Heading
        textAlign="center"
        as="h1"
        color="#1b9cf7"
        fontWeight="bold"
        fontSize={[150]}
        mb={[3, 4, 5]}
      >
      {`SPONSORS`}
      </Heading>
      <CardContainer minWidth="300px">
        <Fade direction="down" triggerOnce cascade damping={0.2}>
          {posts.map((p) => (
            <Post {...p} key={p.url} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};


export default Sponsorship;
