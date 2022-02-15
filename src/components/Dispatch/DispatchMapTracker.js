import React from 'react'
import GoogleMapReact from 'google-map-react';

const DispatchMapTracker = () => {

  const initials = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  return (
    <div style={{ height: '100vh', width: '50%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={initials.center}
          defaultZoom={initials.zoom}
        >
          
        </GoogleMapReact>
      </div>
  )
}

export default DispatchMapTracker