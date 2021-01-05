import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import { useMediumQuery } from '../queries/useMediumQuery';
import { Post } from '../components/Post';

const Schedule = () => {
    const { posts } = useMediumQuery();
  
    return (
      <Section.Container id="Schedule" Background={Background}>
        <Section.Header name="Schedule" icon="✍️" label="writing" />
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
  
  
  
export default Schedule;