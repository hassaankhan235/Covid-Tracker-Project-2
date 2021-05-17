import { useQuery } from "react-query";

import Card from '../Cards/Card'
import Chart from "../Charts/Chart";

export function Data(){
  // const {isloading, error, data} = useQuery('repoData', ()=>
  // fetch('https://covid19.mathdro.id/api').then(res =>
  //   res.json())
  // )
  // if(isloading) console.log('Loading');
  // if(error) console.log('error');
  // if(data) 
  // {
    // let{confirmed, recovered,deaths} = data
    let modifiedData = {
      confirmed: 100,
      recovered: 99,
      deaths:    1,
    }
    return(
      <div className="flex flex-row ml-2 h-full">
       <Card confirmed={modifiedData.confirmed} CardName={'Infected'} 
       cardSub={'active cases of'} type={'active'}/>
       <Card recovered={modifiedData.recovered} CardName={'Recovered'} 
       cardSub={'recoveries from'} type={'recovered'}/>
       <Card deaths={modifiedData.deaths} CardName={'Deaths'}
       cardSub={'Deaths from'} type={'death'} />
      </div>
      )
  // }
  // else console.log('pata nahi kya');
}

export const FetchdailyData = () => {
  const {isloading, error, data} = useQuery('repoData', ()=>
  fetch('https://covid19.mathdro.id/api/daily').then(res=>
  res.json()))
  if(isloading) return 'loading' ;
  if(error) console.error('error');
  if(data){
    const modifiedData = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate
    }))
    return <Chart data={modifiedData} />
  }
  else return 'not working'
}