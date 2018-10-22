import React from 'react';
import MediaQuery from 'react-responsive';
import PCRoute from './PCRoute.js';
import MobileRoute from './MobileRoute.js'

const RouteComponent = () => (
  <div>
    <MediaQuery query="(min-device-width: 1224px)">
      <PCRoute />
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <MobileRoute />
    </MediaQuery>
  </div>
);
  
export default RouteComponent;