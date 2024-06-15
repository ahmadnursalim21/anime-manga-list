import { useEffect, useState } from "react";
import { getMangaList, searchMangaList } from "/src/utils/api";
import "./Manga.css";

function Manga() {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    getMangaList().then((result) => {
      setMangaList(result);
      //   console.log(result);
    });
  });

  const PopulerMangaList = () => {
    return mangaList.map((manga, i) => {
      return (
        <div className="Manga-card" key={i}>
          <h1 className="Managa-title">{manga.title}</h1>
          <img src={manga.images.jpg.image_url} className="Manga-image" />
          <h1 className="Manga-type">{manga.type}</h1>
        </div>
      );
    });
  };

  const search = async (e) => {
    if (e.length > 5) {
      const q = await searchMangaList(e);
      setMangaList(q.data);
      // console.log({ nama: query });
    }
  };
  return (
    <>
      <div className="navabar">
        <h1>Manga List...</h1>
        <input
          type="text"
          placeholder="Cari manga kesukaan anda..."
          className="Input-manga"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <div className="Manga-container">
        <PopulerMangaList />
      </div>
    </>
  );
}
export default Manga;
