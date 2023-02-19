import React, {useContext, useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index';

const Top = () => {
  const {setGlobalState} = useContext(Store);
  useEffect(()=>{
    fetchPopularData().then((res)=>{
      console.log('fetchPopularData', res);
      setGlobalState({
        type: 'SET_POPULAR',
        payload: {
          popular: res.data.items
        }
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      {process.env.YOUTUBE_API_KEY}
      <div>Top</div>
    </Layout>
  )
}

export default Top