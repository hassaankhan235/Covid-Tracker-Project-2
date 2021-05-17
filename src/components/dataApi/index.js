import { useQuery } from "react-query";

import Card from '../Cards/Card'
import Chart from "../Charts/Chart";


export function Data(){
  const {isloading, error, data} = useQuery('repoData', ()=>
  fetch('https://covid19.mathdro.id/api').then(res =>
    res.json())
  )
  if(isloading) console.log('Loading');
  if(error) console.log('error');
  if(data) 
  {
    let{confirmed, recovered,deaths, lastUpdate} = data
    let modifiedData = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths:    deaths.value,
      date: new Date(lastUpdate).toDateString()
    }
    console.log("D1", confirmed.value, lastUpdate ,data);
    return(
      <div className="flex flex-row ml-2 h-full">
       <Card confirmed={modifiedData.confirmed} CardName={'Infected'} 
       cardSub={'active cases of'} type={'active'} 
       date={modifiedData.date}/>
       <Card recovered={modifiedData.recovered} CardName={'Recovered'} 
       cardSub={'recoveries from'} type={'recovered'}
       date={modifiedData.date}/>
       <Card deaths={modifiedData.deaths} CardName={'Deaths'}
       cardSub={'Deaths from'} type={'death'} 
       date={modifiedData.date}/>
      </div>
      )
  }
  else return 'mushkila';
}

export function FetchdailyData(){
  const {isloading, error, data} = useQuery('repoData2', ()=>
  fetch("https://covid19.mathdro.id/api/daily").then(res=> {
    return res.json()
  }))
  if(isloading) return 'loading' ;
  if(error) console.error('error');
  if(data){
    console.log('Data',data);
    const modifiedData = data?.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate
    }))
    return <Chart data={modifiedData} />
  }
  else return 'not working'
}