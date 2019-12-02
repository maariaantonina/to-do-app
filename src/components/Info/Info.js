import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} imagePath={settings.info.image} />
    <p>{settings.info.content}</p>
  </Container>
);

export default Info;