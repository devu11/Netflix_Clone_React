import React, { useEffect, useState } from "react";
import "./RowCards.css";
import axios from "../../src/axios";
import { imageUrl,API_KEY } from "../../src/constants/constants";
import Youtube from "react-youtube";

function RowCards(props) {
  const [movies, setMovies] = useState([]);

  const [urlId,setUrlId] = useState('')

  useEffect(() => {
    axios
      .get(props.Urls)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        // alert('Network Error')
      });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>
  {
console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data)
    if(response.data.results.length!==0){
        setUrlId(response.data.results[0]);
    }
})
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="cards">
        {movies.map((obj) => (
          <img onClick={()=>handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="posters"
          />
        ))}
      </div>

      { urlId &&  <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  );
}
export default RowCards;
