import './heatmap.css';

import 'leaflet/dist/leaflet.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
const  myState = {
    lat: 33.034224,
    lng: -96.811608,
    zoom: 13
  }

const HeatMap = ({ response = [], valueField, latField = 'latitude', longField = 'longitude', intensity = 1000 }) => (
    <div id="report-leaflet-map" className="leaflet-map">
        <Map scrollWheelZoom={false}
             className="map-pane" 
             zoom={myState.zoom} 
             center={[myState.lat, myState.lng]}>

            {response ? <HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={response}
                latitudeExtractor={m => m[latField]}
                longitudeExtractor={m => m[longField]}
                intensityExtractor={m => parseFloat(m[valueField]) * intensity}
            /> : null}

            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
    
        </Map>
    </div>
);

HeatMap.propTypes = {
    response: PropTypes.array,
    valueField: PropTypes.string,
    latField: PropTypes.string,
    longField: PropTypes.string,
    intensity: PropTypes.number
};

export default HeatMap;