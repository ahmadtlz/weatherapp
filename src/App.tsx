import React from 'react';
import WeatherPage from './components/pages/WeatherPage';

import Global from './Global.styled';

const App :React.FC = () => (
  <>
    <Global />
    <WeatherPage />
  </>
);

export default App;
