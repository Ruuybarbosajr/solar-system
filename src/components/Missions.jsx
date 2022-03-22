import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="section-missions">
          { missions.map(({ name, country, destination, year }) => (<MissionCard
            key={ name }
            name={ name }
            country={ country }
            destination={ destination }
            year={ year }
          />)) }
        </section>
      </div>
    );
  }
}
