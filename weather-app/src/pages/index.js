import Image from 'next/image'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';


export default function Home() {
  const fetchWeather = async () => {
    const data = await getWeatherData()
    console.log(data)
  };

  fetchWeather();

  return (
    <div className='Home'>
      <h1 className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-emerald-400 h-fit shadow-xl'>
        <TopButtons />
        <Inputs />
        <TimeLocation />
        <TempAndDetails />
        <Forecast title='hourly forecast' />
        <Forecast title='daily forecast' />
      </h1>      
    </div>
  );
}
