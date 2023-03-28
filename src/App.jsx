import { useState} from 'react'
import First from './assets/first.jpg'
import Second from './assets/second.jpg'
import Third from './assets/third.jpg'

function App() {
 
const [youtubeID,setYoutubeID]=useState("")

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key":
      "d7f3e04d0fmsh481d6b03cd7494ep14cfdcjsn8775ef35e2c3",
    "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
  },
};

const updateID=(e)=>{
  setYoutubeID(e.target.value)
}

const startDownload=()=>{
  fetch(
    `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${youtubeID}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      window.open(response.link)
    })
    .catch((err) => console.error(err));

}

  return (
   <>
    <div className='container'>
    <h1 className='title'>Youtube to MP3</h1>
    <h2 className='subtitle'>please follow steps below to get your mp3 file</h2>
    <section className='explain-area'>
      <section className='explain'><img src={First}/><h3 className='step'>find youtube video you like</h3></section>
      <section className='explain'><img src={Second}/><h3 className='step'>press 'share' and copy lines after '/' </h3></section>
      <section className='explain'><img src={Third} /><h3 className='step'>start download!</h3></section>
    </section>
    <section className='input-area'>
      <label className='label'>paste youtubeID here : </label>
      <input className='input' type='text' value={youtubeID} onChange={updateID}/>
      <button className='button' onClick={startDownload}>download</button>
    </section>
    </div>
   </>
  )
}

export default App
