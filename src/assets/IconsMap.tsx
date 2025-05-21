import type { JSX } from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiNightClear,
  WiShowers,
  WiDayCloudy,
} from 'react-icons/wi';

export const iconMap: Record<string, JSX.Element> = {
  Clear: <WiNightClear size={98} />,
  Sunny: <WiDaySunny size={98} />,
  Clouds: <WiCloudy size={98} />,
  Rain: <WiRain size={98} />,
  Drizzle: <WiShowers size={98} />,
  Thunderstorm: <WiThunderstorm size={98} />,
  Snow: <WiSnow size={98} />,
  Mist: <WiFog size={98} />,
  Fog: <WiFog size={98} />,
};
