'use client';


import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 22.813197019339057,
  lng: 75.90988079757986
};

const locations = [
  { lat: 22.80451060289199, lng: 75.90561255122908 }
];

const GoogleMapsEmbed = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
      loadingElement={<div>Loading Google Maps...</div>}
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={{
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false,
          cameraControl: true,
        }}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsEmbed;