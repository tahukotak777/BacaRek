"use client";

import CDownContent from "@/components/CDownContent";
import ListCSB1 from "@/components/ListCSb1";
import Tema from "@/components/Tema";
import "@/style/Style2.css";
import "@/style/css_reset.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [popG, setPopG] = useState([]);
  const [terG, setTerG] = useState([]);
  const [popS, setPopS] = useState([]);
  const [terS, setTerS] = useState([]);
  const [popT, setPopT] = useState([]);
  const [terT, setTerT] = useState([]);
  const [popCG, setPopCG] = useState([]);
  const [terCG, setTerCG] = useState([]);

  const fatch = async () => {
    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games/news/?page=1"
      )
      .then((response) => setTerG(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games?page=1"
      )
      .then((response) => setPopG(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games/e-sport/?page=1"
      )
      .then((response) => setPopS(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games/review?page=1"
      )
      .then((response) => setTerS(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/tech/news?page=1"
      )
      .then((response) => setPopT(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/tech?page=1"
      )
      .then((response) => setTerT(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games/console-game?page=1"
      )
      .then((response) => setPopCG(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://the-lazy-media-api.vercel.app/api/games/review?page=1"
      )
      .then((response) => setTerCG(response.data))
      .catch((error) => new Error(error));
  };

  useEffect(() => {
    fatch();
  }, []);

  return (
    <>
      <div className="content">
        <Tema isi="Games" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={popG?.[0]?.thumb}
              alt={popG?.[0]?.title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{popG?.[0]?.title}</h3>
                <p>{popG?.[0]?.desc}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {popG?.map((data, i) => {
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
            {terG?.map((data, i) => {
              if (i < 4) {
                return <CDownContent data={data} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </section>

      {/* /*------------------------------------------------Games end-----------------------------------------------------*/}

      <div className="content">
        <Tema isi="E-Sports" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={popS?.[0]?.thumb}
              alt={popS?.[0]?.title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{popS?.[0]?.title}</h3>
                <p>{popS?.[0]?.desc}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {popS?.map((data, i) => {
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
            {terS?.map((data, i) => {
              if (i < 4) {
                return <CDownContent data={data} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </section>

      {/*---------------------------------------------------E-Sports end-------------------------------------------------------*/}

      <div className="content">
        <Tema isi="technology" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={popT?.[0]?.thumb}
              alt={popT?.[0]?.title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{popT?.[0]?.title}</h3>
                <p>{popT?.[0]?.desc}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {popT?.map((data, i) => {
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
            {terT?.map((data, i) => {
              if (i < 4) {
                return <CDownContent data={data} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </section>

      {/*----------------------------------------------technology end--------------------------------------------------------*/}

      <div className="content">
        <Tema isi="Console Games" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={popCG?.[0]?.thumb}
              alt={popCG?.[0]?.title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{popCG?.[0]?.title}</h3>
                <p>{popCG?.[0]?.desc}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {popCG?.map((data, i) => {
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
            {terCG?.map((data, i) => {
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
