"use client";

import "../../../style/style3.css";
import "../../../style/css_reset.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import ListCSB1 from "@/components/ListCSb1";

export default function page() {
  const [pop, setPop] = useState();
  const [berita, setBerita] = useState();
  const param = useParams();
  const fetch = async () => {
    await axios
      .get(
        `https://the-lazy-media-api.vercel.app/api/detail/${param.key[0]}/${param.key[1]}/${param.key[2]}/${param.key[3]}`
      )
      .then((response) => setBerita(response.data))
      .catch((error) => new Error(error));

    await axios
      .get("https://the-lazy-media-api.vercel.app/api/games?page=1")
      .then((response) => setPop(response.data))
      .catch((error) => new Error(error));

    console.log(berita);
    console.log(param.key[0]);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="content">
        <div className="main-content">
          <div class="MainUtama-content">
            <h1>{berita?.results.title}</h1>
            <img src={berita?.results.thumb} alt="Bos Yamaha" />
            <div class="MainText-content">
              <div class="deskripsi-foto-content">
                <p>{berita?.results.content}</p>
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
    </>
  );
}
