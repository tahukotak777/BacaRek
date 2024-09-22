"use client";

import CDownContent from "@/components/CDownContent";
import ListCSB1 from "@/components/ListCSb1";
import Tema from "@/components/Tema";
import "@/style/Style2.css";
import "@/style/css_reset.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [popB, setPopB] = useState([]);
  const [terB, setTerB] = useState([]);
  const [popS, setPopS] = useState([]);
  const [terS, setTerS] = useState([]);
  const [popT, setPopT] = useState([]);
  const [terT, setTerT] = useState([]);
  const [popE, setPopE] = useState([]);
  const [terE, setTerE] = useState([]);

  const fatch = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=business&sortBy=popularity&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setTerB(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=business&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setPopB(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=sports&sortBy=popularity&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setPopS(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=sports&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setTerS(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=technology&sortBy=popularity&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setPopT(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=technology&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setTerT(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=entertainment&sortBy=popularity&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setPopE(response.data))
      .catch((error) => new Error(error));

    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setTerE(response.data))
      .catch((error) => new Error(error));
  };

  useEffect(() => {
    fatch();
  }, []);

  return (
    <>
      <div className="content">
        <Tema isi="business" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={popB?.articles?.[0].urlToImage}
              alt={popB?.articles?.[0].title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{popB?.articles?.[0].title}</h3>
                <p>{popB?.articles?.[0].content}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {popB?.articles?.map((data, i) => {
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
            {terB?.articles?.map((data, i) => {
              if (i < 4) {
                return <CDownContent data={data} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </section>

      {/* /*------------------------------------------------buissnis end-----------------------------------------------------*/}

      <div className="content">
        <Tema isi="sports" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={popS?.articles?.[0].urlToImage}
              alt={popS?.articles?.[0].title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{popS?.articles?.[0].title}</h3>
                <p>{popS?.articles?.[0].content}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {popS?.articles?.map((data, i) => {
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
            {terS?.articles?.map((data, i) => {
              if (i < 4) {
                return <CDownContent data={data} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </section>

      {/*---------------------------------------------------sports end-------------------------------------------------------*/}

      <div className="content">
        <Tema isi="technology" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={popT?.articles?.[0].urlToImage}
              alt={popT?.articles?.[0].title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{popT?.articles?.[0].title}</h3>
                <p>{popT?.articles?.[0].content}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {popT?.articles?.map((data, i) => {
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
            {terT?.articles?.map((data, i) => {
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
        <Tema isi="Entertainment" />
        <div className="kategori-content">
          <h2>Berita Terpopuler</h2>
        </div>
        <div className="main-content">
          <div className="MainUtama-content">
            <img
              src={popE?.articles?.[0].urlToImage}
              alt={popE?.articles?.[0].title}
            />
            <div className="MainText-content">
              <div>
                <h1>1.</h1>
              </div>
              <div>
                <h3>{popE?.articles?.[0].title}</h3>
                <p>{popE?.articles?.[0].content}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <ul>
              {popE?.articles?.map((data, i) => {
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
            {terE?.articles?.map((data, i) => {
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
