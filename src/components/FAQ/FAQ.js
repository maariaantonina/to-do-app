import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.FAQ.title} imagePath={settings.FAQ.image} />
    <h2>{settings.FAQ.q1}</h2>
    <p>{settings.FAQ.a1}</p>
    <h2>{settings.FAQ.q1}</h2>
    <p>{settings.FAQ.a1}</p>
    <h2>{settings.FAQ.q1}</h2>
    <p>{settings.FAQ.a1}</p>
  </Container>
);

export default Info;