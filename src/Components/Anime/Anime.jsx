import { useState, useEffect } from "react";
import { getAnimeList, searchAnimeList } from "/src/utils/api";
import "./Anime.css";

function App() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    getAnimeList().then((result) => {
      setAnimeList(result);
    });
  }, []);

  const PopularAnimeList = () => {
    return animeList.map((anime, i) => {
      return (
        <div className="Anime-warapper" key={i}>
          <h3 className="Anime-title">{anime.title}</h3>
          <img src={anime.images.jpg.image_url} className="Anime-image" />
          <p>{anime.score}</p>
          <i className="Anime-duration">{anime.duration}</i>
        </div>
      );
    });
  };
  const search = async (e) => {
    if (e.length >= 4) {
      const query = await searchAnimeList(e);
      setAnimeList(query.data);
      // console.log({ nama: query });
    }
  };
  return (
    <>
      <div className="nav">
        <h1>Anime Populer...</h1>
        <input
          type="text"
          className="Input-anime"
          placeholder="Cari Anime kesukaan anda"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <div className="Card-container">
        <PopularAnimeList />
      </div>
    </>
  );
}

export default App;
