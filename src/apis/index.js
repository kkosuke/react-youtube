import axios from "axios";

// 変数名は「REACT_APP_〜」の形にしないと上手くいきません。
const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
const params = {
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
}
export const fetchPopularData = async () =>{
  return await youtube.get('/videos',{
    // https://developers.google.com/youtube/v3/docs?hl=ja
    params: {
      ...params,
      chart: 'mostPopular'
    }
  })
}

export const fetchSelectedData = async (id) =>{
  return await youtube.get('/videos',{
    params: {
      ...params,
      id
    }
  })
}