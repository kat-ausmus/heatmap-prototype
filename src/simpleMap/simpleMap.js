import './map.css';
import 'leaflet/dist/leaflet.css';
import React, { Component }  from 'react'
import { render } from 'react-dom'
import { Map, TileLayer } from 'react-leaflet'

export default class SimpleMap extends Component {
  constructor() {
    super()
    this.state = {
      lat: 33.034224,
      lng: -96.811608,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div id="report-leaflet-map" className="leaflet-map">
      <Map center={position}  className="map-pane" zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </Map>
      </div>
    );
  }
}