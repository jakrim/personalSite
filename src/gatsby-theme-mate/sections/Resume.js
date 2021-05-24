import React from 'react';
import Triangle from '../components/Triangle';
import Section from '../components/Section';
import { SECTION } from '../utils/constants';
import Colors from '../colors.json';

const Background = () => (
  <div>
    <Triangle
      color="secondary"
      height={['80vh', '35vh']}
      width={['20vw', '110vw']}
    />
    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
    />
    <Triangle
      color="muted"
      height={['25vh', '25vh']}
      width={['100vw', '125vw']}
    />
    <Triangle
      color="muted"
      height={['25vh', '8vh']}
      width={['100vw', '10vw']}
    />
    <Triangle
      color="primary"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    />

    <Triangle
      color="secondary"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </div>
);

const Resume = () => (
  <Section.Container
    id={SECTION.resume}
    Background={Background}
    style={{
      paddingTop: '56.25%',
      overflow: 'hidden',
      position: 'relative',
      display: 'block',
      width: '100%'
    }}
  >
    <Section.Header name={SECTION.resume} icon="💥" label="boom" />
    <p
      style={{
        color: Colors.textHeader,
        margin: 4
      }}
    >
      (Project Titles and Descriptions are Clickable)
    </p>
    <iframe
      title="resume"
      src="https://resume.creddle.io/resume/fpfrr4eupe8"
      frameBorder="0"
      height="1090px"
      width="device-width"
      seamless
      overflow="hidden"
      style={{
        overflowX: 'hidden',
        overflowY: 'hidden'
      }}
    />
  </Section.Container>
);

export default Resume;
