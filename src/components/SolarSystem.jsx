import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="section-system">
        <Title headline="Planetas" />
        <section className="section-planets">
          { planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          )) }
        </section>
      </div>
    );
  }
}
