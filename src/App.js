import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query'
import './App.css';

// import Styles from './App.module.css'
import {Data, FetchdailyData} from './components/dataApi/index'
import backgroundImage from './65381887.jpg'

const queryClient = new QueryClient()


function App() {
  return(
    <div className="App" style={{overflow:'scroll'}}>
    <div className='bg-fixed bgImg' style={{
      backgroundImage: `url(${backgroundImage})`
    }}>
    </div>
    <div className='datascreen'>
    <h5 className='text-pink-500 text-5xl m-5 underline'> CORONAVIRS SUMMARY </h5>
    <QueryClientProvider client={queryClient}>
      <Data />
    </QueryClientProvider>  
    <QueryClientProvider client={queryClient}>
      <FetchdailyData />
    </QueryClientProvider>
    </div>
    </div>)
}

export default App;
