import type { JSX } from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiNightClear,
  WiDayCloudy,
  WiShowers,
} from 'react-icons/wi';

export const iconMap: Record<string, JSX.Element> = {
  Sunny: <WiDaySunny size={64} />,
  Clear: <WiNightClear size={64} />,
  'Partly cloudy': <WiDayCloudy size={64} />,
  Cloudy: <WiCloudy size={64} />,
  Overcast: <WiCloudy size={64} />,
  Mist: <WiFog size={64} />,
  'Patchy rain possible': <WiShowers size={64} />,
  'Light rain': <WiRain size={64} />,
  'Heavy rain': <WiRain size={64} />,
  Thunderstorm: <WiThunderstorm size={64} />,
  Snow: <WiSnow size={64} />,
};
