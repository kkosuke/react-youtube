import React, {useContext, useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import VideoGridItem from '../components/VideoGridItem/VideoGridItem';

const Top = () => {
  const {globalState, setGlobalState} = useContext(Store);
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
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular)=>{
            console.log();
            return (
              <VideoGridItem
                key={popular.id}
                id={popular.id}
                src={popular.snippet.thumbnails.standard ? popular.snippet.thumbnails.standard.url : popular.snippet.thumbnails.medium.url}
                title={popular.snippet.channelTitle}
              />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top