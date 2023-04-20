import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const arr = ["bollywood", "hollywood", "tollywood"];
let val = arr[Math.floor(Math.random() * arr.length)];
//randomly passing a paramter to the api to give the feeling of random home screen of youtube
const options = {
  params: { q: val, hl: "en", gl: "IN" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_SOME_KEY || "your api key",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
const optionsForSearch = {
  params: { hl: "en", gl: "IN" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_SOME_KEY || "your api key",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
export const fetchSearchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, optionsForSearch);
  return data;
};
