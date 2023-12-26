import React, { useEffect, useState } from "react";
import { API_KEY,imageUrl } from "../../src/constants/constants";
import "./Banner.css";
import axios from "../../src/axios";
function Banner() {
 
    const [movie,setMovie] = useState();


  useEffect(() => {

    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

        console.log(response.data.results[0])
        setMovie(response.data.results[2])
    });

  }, []);
  return (
   
      
    <div  style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`
      }}  className="banner-bg">
      <div className="content">
        <h2 className="title">{movie ? movie.title : ''}</h2>
        <div className="banner-buttons">
          <button className="play-button">Play</button>
          <button className="play-button">My List</button>
        </div>
        <h4 className="description">{movie ? movie.overview : ''}</h4>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
