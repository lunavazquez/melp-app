import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import firebase from './utils/firebase';

import Places from './components/places/';
import styles from './index.module.sass';

class App extends Component {
  static defaultProps = {
    gmap: {
      center: {
        lat: 23.3265622,
        lng: -100.6582013,
      },
      zoom: 6.24,
    },
  };

  state = {
    places: [],
    gmap: {
      center: {
        lat: 23.3265622,
        lng: -100.6582013,
      },
      zoom: 6.24,
    },
  };

  componentDidMount() {
    fetch('https://melp-app.firebaseio.com/places.json', { method: 'GET' })
      .then(response => response.json())
      .then(places => this.setState({ places }));
  }

  handlePlaceSelected = id => {
    const placeData = this.state.places.find(place => place.id === id);

    const gmap = {
      center: {
        lat: placeData.address.location.lat,
        lng: placeData.address.location.lng,
      },
      zoom: 12,
    };

    this.setState({ gmap });
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.sidebar}>
          <Places places={this.state.places} handleClick={this.handlePlaceSelected} />
        </div>
        <div className={styles.map}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyByLqOrwCdAq5etCPFJILUTUgEyhPEm7Ks' }}
            defaultCenter={this.props.gmap.center}
            defaultZoom={this.props.gmap.zoom}
            center={this.state.gmap.center}
            zoom={this.state.gmap.zoom}
          />
        </div>
      </div>
    );
  }
}

export default App;
