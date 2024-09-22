"use client";

import CDownContent from "@/components/CDownContent";
import ListCSB1 from "@/components/ListCSb1";
import Tema from "@/components/Tema";
import "@/style/Style2.css";
import "@/style/css_reset.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [pop, setPop] = useState([]);
  const [ter, setTer] = useState([]);

  const fatch = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=entertainment&sortBy=popularity&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setTer(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setPop(response.data))
      .catch((error) => new Error(error));
  };

  useEffect(() => {
    fatch();
  }, []);

  return (
    <>
      <div className="content">
        <Tema isi="entertainment" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={pop?.articles?.[0].urlToImage}
              alt={pop?.articles?.[0].title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{pop?.articles?.[0].title}</h3>
                <p>{pop?.articles?.[0].content}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {pop?.articles?.map((data, i) => {
                if (i < 5 && i >= 1) {
                  return <ListCSB1 data={data} i={i} />;
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        </div>
      </div>

      <section class="content2">
        <div class="main-content2">
          <h2>Berita Terbaru</h2>
          <div class="down-content2">
            {ter?.articles?.map((data, i) => {
              if (i < 4) {
                return <CDownContent data={data} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
