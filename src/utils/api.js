const baseURLAnime = "https://api.jikan.moe/v4/anime";
const baseURLManga = "https://api.jikan.moe/v4/manga";

export const getAnimeList = async () => {
  const url = await fetch(baseURLAnime);
  const { data } = await url.json();
  return data;
};

export const searchAnimeList = async (query) => {
  // const swf = true;
  const search = await fetch(`${baseURLAnime}?q=${query}&sfw`);
  const data = await search.json();
  return data;
};

export const getMangaList = async () => {
  const ulrManga = await fetch(baseURLManga);
  const { data } = await ulrManga.json();
  return data;
};

export const searchMangaList = async (q) => {
  // const swf = true;
  const search = await fetch(`${baseURLManga}?q=${q}&sfw`);
  const data = await search.json();
  return data;
};
