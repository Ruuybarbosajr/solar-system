import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <section className="planet-img">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ planetName }
          />
        </section>
        <section data-testid="planet-name" className="planet-name">
          <p>{ planetName }</p>
        </section>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
