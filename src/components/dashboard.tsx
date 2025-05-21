import { useEffect, useState } from 'react';
import { fetchWeather } from '../services/weatherService';
import WeatherDetails from './weatherDetails';
// import { iconMap } from '../assets/IconsMap';

type Props = {
  setSkyGradient: (bg: string) => void;
};

export default function Dashboard({ setSkyGradient }: Props) {
  const [city, setCity] = useState<string>('Ahwaz');
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [weather, setWeather] = useState<any>(null);
  const [time, setTime] = useState<string>('');

  const getLocalTime = (dt: number, timezone: number): string => {
    const temp = new Date((dt + timezone) * 1000);
    const localDate = temp.toLocaleTimeString('en-US', {
      hour: '2-digit',
      timeZone: 'UTC',
      hour12: false,
    });
    return localDate;
  };

  const getSkyGradient = (hourStr: string): string => {
    const hour = Number(hourStr);
    if (hour >= 5 && hour < 8) {
      return 'bg-gradient-to-b from-orange-200 via-blue-100 to-sky-200'; // Dawn
    } else if (hour >= 8 && hour < 17) {
      return 'bg-gradient-to-b from-sky-300 to-indigo-300'; // Day
    } else if (hour >= 17 && hour < 19) {
      return 'bg-gradient-to-b from-yellow-200 via-pink-300 to-purple-400'; // Sunset
    } else if (hour >= 19 && hour < 22) {
      return 'bg-gradient-to-b from-blue-900 to-gray-900'; // Evening
    } else {
      return 'bg-gradient-to-b from-gray-900 to-black'; // Night
    }
  };

  useEffect(() => {
    if (weather) {
      const gradient = getSkyGradient(time);
      setSkyGradient(gradient);
    }
  }, [weather]);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const data = await fetchWeather(city);
        setWeather(data);
        console.log('first', data);
        const localTime = getLocalTime(data.dt, data.timezone);
        setTime(localTime);
      } catch (err) {
        console.error('error fetching weather:', err);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, [city]);

  return (
    <div className='w-full h-full flex flex-col items-center gap-0'>
      {/* <h1 className='text-8vh font-bold text-gray-700'>Weather App</h1> */}
      <div className='w-full flex flex-row items-center justify-center gap-8'>
        {weather && (
          <h2 className='text-bold text-2rem text-white'>{weather.name}</h2>
        )}

        <div className='w-5/10 max-w-20rem h-3rem rounded-md px-1rem flex flex-row gap-0 items-center justify-end border-1px border-dark-800 bg-white'>
          <input
            type='text'
            placeholder='Tehran'
            className='w-full h-full text-lg border-none'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => setCity(inputValue)} className='w-30px h-full'>
            <img src='/search.png' alt='search' className='w-30px h-30px' />
          </button>
        </div>
      </div>
      {weather && (
        <div className='w-full max-w-25rem flex flex-col items-start'>
          <div
            className={`w-full max-w-25rem flex flex-row items-center justify-start`}
          >
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p className='text-2rem font-light text-white'>
              {weather.weather[0].description}
            </p>
          </div>
          <p className='text-5rem font-light pl-2rem text-white mb-6'>
            {Math.round(weather.main.temp)}°C
          </p>
          <WeatherDetails weather={weather} />
        </div>
      )}
    </div>
  );
}
