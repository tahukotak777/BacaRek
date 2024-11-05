"use client";

import CDownContent from "@/components/CDownContent";
import ListCSB1 from "@/components/ListCSb1";
import Tema from "@/components/Tema";
import "../../style/style2.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [pop, setPop] = useState([]);
  const [ter, setTer] = useState([]);

  const fatch = async () => {
    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games/news/?page=1"
      )
      .then((response) => setTer(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games/e-sport/?page=1"
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
        <Tema isi="E-Sports" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={pop?.[0]?.thumb}
              alt={pop?.[0]?.title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{pop?.[0]?.title}</h3>
                <a href={`/isi?key=${pop?.[0]?.key}`}>{pop?.[0]?.desc}</a>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {pop?.map((data, i) => {
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
            {ter?.map((data, i) => {
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
