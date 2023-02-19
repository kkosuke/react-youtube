import React, {useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'


const Top = () => {
  useEffect(()=>{
    fetchPopularData().then((res)=>{
      console.log('fetchPopularData', res);
    })

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