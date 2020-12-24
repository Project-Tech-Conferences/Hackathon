import React from 'react';
import { Heading, Text, Box, Image, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { useAboutMeQuery } from '../queries/useAboutMeQuery';

const About = () => {
  const { markdown, profile } = useAboutMeQuery();

  // return (
  //   <Section.Container id="about" Background={Background}>
  //     <Heading
  //       textAlign="center"
  //       as="h1"
  //       color="black"
  //       fontWeight="bold"
  //       fontSize={[150]}
  //       mb={[3, 4, 5]}
  //     >
  //       {`PTC HACKS`}
  //     </Heading>
  //     {/* <Heading
  //      textAlign="center"
  //      as="h1"
  //      color="black"
  //      fontWeight="bold"
  //      fontSize={[150]}
  //      mb={[3, 4, 5]}
  //      >
  //        {'CODE FOR COVID'}
  //      </Heading> */}
  //     {/* <Flex justifyContent="center" alignItems="center" flexWrap="wrap"> */}
  //       {/* <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
  //         <Fade direction="down" triggerOnce>
  //           <ReactMarkdown source={markdown} renderers={markdownRenderer} />
  //         </Fade>
  //       </Box> */}

  //       {/* <Box
  //         width={[1, 1, 2 / 6]}
  //         style={{ maxWidth: '300px', margin: 'auto' }}
  //       >
  //         <Fade direction="right" triggerOnce>
  //           <ProfilePicture mt={[4, 4, 0]} ml={[0, 0, 1]} {...profile} />
  //         </Fade>
  //       </Box> */}
  //     {/* </Flex> */}
  //   </Section.Container>
  // );
  return (
    <Section.Container id="home" Background={Background}>
      <Heading
        textAlign="center"
        as="h1"
        color="black"
        fontWeight="bold"
        fontSize={[150]}
        mb={[3, 4, 5]}
      >
        {`PTC HACKS`}
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
      >
      {`hackathon for high school students`}
      </Heading>

      {/* <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {socialLinks.map((sl) => (
          <Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
            <SocialLink {...sl} />
          </Box>
        ))}
      </Flex> */}
    </Section.Container>
  );
};

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.4s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const Background = () => (
  <>

    <Triangle
      color="background"
      height={['100vh', '100vh']}
      width={['100vw', '100vw']}
      position="bottom-left"
    /> 

  </>
);

export default About;
