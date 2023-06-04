import * as React from 'react';
import ReactMapGL from 'react-map-gl';

function App() {
  
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  return (
    <div className="App">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
    </div>
  );
}

export default App;
