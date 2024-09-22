"use client";

import Content2 from "@/components/Content2";
import ListSB1 from "@/components/ListSB1";
import ListSB2 from "@/components/ListSB2";
import "../style/Style.css";
import "../style/css_reset.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [berita, setBerita] = useState([]);
  const [tip, setTip] = useState([]);
  const [baru, setBaru] = useState([]);

  const fatch = async () => {
    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games?page=1"
      )
      .then((response) => setBerita(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/tech/tip?page=1"
      )
      .then((response) => setTip(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games/e-sport/?page=1"
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
          <img src={berita?.[0]?.thumb} alt={berita?.[0]?.title} />
          <a href="/AllCategory">{berita?.[0]?.title}</a>
          <p>{berita?.[0]?.desc}</p>
        </div>
        <div className="sidebar">
          <ul>
            {berita?.map((data, i) => {
              if (i < 5) {
                return <ListSB1 src={data.thumb} title={data.title} />;
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
          {baru?.map((data, i) => {
            if (i < 5) {
              return <Content2 img={data.thumb} title={data.title}/>;
            } else {
              return null;
            }
          })}
        </div>
        <div className="sidebar2">
          <h2>Tech tip</h2>
          <ol>
            {tip?.map((data, i) => {
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
