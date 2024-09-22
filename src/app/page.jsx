"use client";

import Content2 from "@/components/Content2";
import ListSB1 from "@/components/ListSB1";
import ListSB2 from "@/components/ListSB2";
import "@/style/Style.css";
import "@/style/css_reset.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [berita, setBerita] = useState([]);
  const [popular, setPopular] = useState([]);
  const [baru, setBaru] = useState([]);

  const fatch = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?q=a&sortBy=relevancy&country=us&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setBerita(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/everything?q=a&sortBY=popularity&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setPopular(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setBaru(response.data))
      .catch((error) => new Error(error));
  };

  useEffect(() => {
    fatch();
  }, []);

  return (
    <>
      <div className="content">
        <div className="main-content">
          <img src={berita?.articles?.[0].urlToImage} alt="Bos Yamaha" />
          <a href="/AllCategory">{berita?.articles?.[0].title}</a>
          <p>{berita?.articles?.[0].content}</p>
        </div>
        <div className="sidebar">
          <ul>
            {berita?.articles?.map((data, i) => {
              if (i < 5) {
                return <ListSB1 src={data.urlToImage} title={data.title} />;
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>

      <section className="content">
        <div className="down-content">
          <h2>Berita Terbaru</h2>
          {baru?.articles?.map((data, i) => {
            if (i < 5) {
              return <Content2 img={data.urlToImage} title={data.title}/>;
            } else {
              return null;
            }
          })}
        </div>
        <div className="sidebar2">
          <h2>Berita Utama</h2>
          <ol>
            {popular?.articles?.map((data, i) => {
              if (i < 5) {
                return <ListSB2 i={i} title={data.title} />;
              } else {
                return null;
              }
            })}
          </ol>
        </div>
      </section>
    </>
  );
}
