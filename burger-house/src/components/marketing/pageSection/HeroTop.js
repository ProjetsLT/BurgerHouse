import React from 'react';
import Illustration from '../../../medias/images/background/bg-food.jpg';
import Container from '../../elements/Container';
import Header from '../pageSection/Header';


export default function HeroTop() {
  return (
    <div className="bg-primary w-full h-screen">
      <div
        className="bg-repeat h-full w-full"
        style={{ backgroundImage: `url(${Illustration})` }}>
        <Container>
          <Header />
        </Container>
      </div>
    </div>
  );
}
