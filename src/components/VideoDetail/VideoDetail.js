import React, { useContext, useEffect } from 'react'
// 現在のURLのpathやサーチパラメータにアクセスしやすくなる
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../apis/index';
import { Store } from '../../store';
import VideoPlay from '../VideoPlay/VideoPlay';
import Linkify from 'react-linkify'
import Style from "./VideoDetail.module.scss"

const VideoDetail = () => {
  const {globalState, setGlobalState} = useContext(Store);
  const location = useLocation();
  const setSelectedVideo = async () =>{
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v');
    await fetchSelectedData(id).then((res)=>{
      const item = res.data.items.shift();
      setGlobalState({
        type: "SET_SELECTED",
        payload: {
          selected: item
        }
      });
      console.log(item);
    });
  }

  useEffect(()=>{
    setSelectedVideo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return ( globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
    ): (<span>no data</span>)
  )
}

export default VideoDetail