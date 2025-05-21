import DetailCard from './detailCard';

type WeatherDetailsProps = {
  weather: any;
};

const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  return (
    <div className='flex flex-wrap gap-15px'>
      <DetailCard
        label='Humidity'
        value={`${weather.main.humidity}%`}
        icon='./humidity.png'
      />
      <DetailCard
        label='Pressure'
        value={`${weather.main.pressure} hPa`}
        icon='./pressure.png'
      />
      <DetailCard
        label='Feels Like'
        value={`${Math.round(weather.main.feels_like)}°C`}
        icon='./temp.png'
      />
      <DetailCard
        label='Wind Speed'
        value={`${weather.wind.speed} m/s`}
        icon='./wind.png'
      />
      <DetailCard
        label='Visibility'
        value={`${weather.visibility / 1000} km`}
        icon='./visibility.png'
      />
      <DetailCard
        label='Cloudiness'
        value={`${weather.clouds.all}%`}
        icon='./clouds.png'
      />
    </div>
  );
};

export default WeatherDetails;
