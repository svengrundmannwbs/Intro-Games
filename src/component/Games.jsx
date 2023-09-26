import { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";
import useContentful from "../hooks/useContentful";
import NavBar from "./NavBar";
import "./games.css";

function Games() {
  const [games, setGames] = useState();
  const { getContent } = useContentful();
  const [sort, setSort] = useState();

  const sortList = [
    "fields.rating",
    "-fields.rating",
    "fields.published",
    "-fields.published",
    "fields.company",
    "-fields.company",
  ];

  const ratingUp = () => {
    setSort(sortList[0]);
  };
  const ratingDown = () => {
    setSort(sortList[1]);
  };
  const publishedUp = () => {
    setSort(sortList[2]);
  };
  const publishedDown = () => {
    setSort(sortList[3]);
  };
  const companyUp = () => {
    setSort(sortList[4]);
  };
  const companyDown = () => {
    setSort(sortList[5]);
  };

  useEffect(() => {
    getContent("game", "fields.published").then((response) =>
      setGames(response)
    );
  }, []);
  useEffect(() => {
    getContent("game", sort).then((response) => setGames(response));
  }, [sort]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <NavBar />
        <div className="gradient"></div>
        <div className="all">
          <h1 className="head">Indie + Retro Games</h1>
          <div className="btn">
            <button className="ratingup-btn" onClick={ratingUp}>
              Rating ↑
            </button>
            <button className="ratingdown-btn" onClick={ratingDown}>
              Rating ↓
            </button>
            <button className="publishedup-btn" onClick={publishedUp}>
              Published ↑
            </button>
            <button className="publisheddown-btn" onClick={publishedDown}>
              Published ↓
            </button>
            <button className="companyup-btn" onClick={companyUp}>
              Company ↑
            </button>
            <button className="companydown-btn" onClick={companyDown}>
              Company ↓
            </button>
          </div>

          {games
            ? games.items.map((game, key) => {
                return (
                  <div className="games" key={key}>
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <h2>{game.fields.name}</h2>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <div className="published">{game.fields.published}</div>
                      </div>
                    </div>
                    <div className="row d-flex align-items-center">
                      <div className="col d-flex justify-content-center">
                        <div className="company">{game.fields.company} </div>
                      </div>
                      <div className="col">
                        <div className="rating">
                          <ProgressBar
                            key={"progress" + key}
                            now={game.fields.rating}
                            label={`Rating: ${game.fields.rating} / 100`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {game.fields.bilder?.map((bild, id, key) => (
                        <div
                          className="col d-flex justify-content-center"
                          key={"img" + id + key}
                        >
                          <div className="images">
                            <img src={bild.fields.file.url} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            : "No Results"}
        </div>
      </motion.div>
    </>
  );
}

export default Games;

/*
const sortFun = {
    ratingUp: () => setSort(sortList[0]),
    ratingDown: () => setSort(sortList[1]),
    publishedUp: () => setSort(sortList[2]),
    publishedDown: () => setSort(sortList[3]),
    companyUp: () => setSort(sortList[4]),
    companyDown: () => setSort(sortList[5]),
  };

  return (
    <div>
      <button onClick={sortFun.ratingUp}>Rating Up</button>
      <button onClick={sortFun.ratingDown}>Rating Down</button>
      <button onClick={sortFun.publishedUp}>Published Up</button>
      <button onClick={sortFun.publishedDown}>Published Down</button>
      <button onClick={sortFun.companyUp}>Company Up</button>
      <button onClick={sortFun.companyDown}>Company Down</button>
    </div>
  );
}
*/
