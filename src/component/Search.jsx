import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import axios from "axios";
//import useContentful from "../hooks/useContentful";
import useOwnAPI from "../hooks/useOwnAPI";
import "./search.css";

function Search() {
  //const { searchArchivedGames } = useContentful();
  //const { getImages } = useOwnAPI();
  const [results, setResults] = useState([]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/games")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const [showResults, setShowresults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }

  useEffect(() => {
    if (search.length >= 2) {
      setShowresults(filterItems(results, search));
    }
  }, [search]);

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
        <Container className="mt-5">
          <Row>
            <Col>
              <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                  name="search"
                  size="lg"
                  type="text"
                  placeholder="Search"
                  className="me-2 rounded-pill"
                  value={search}
                  onChange={handleChange}
                />
                <Button className="rounded-pill" variant="warning">
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              {search.length >= 2
                ? showResults.map((element, key) => (
                    <motion.div
                      className="stagCard"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Card
                        border="warning"
                        style={{
                          width: "30rem",
                          marginBottom: "2rem",
                          marginTop: "1rem",
                        }}
                        key={key}
                      >
                        <Card.Header>Game</Card.Header>
                        <Card.Body>
                          <Card.Title>{element}</Card.Title>
                          <Card.Text>Missing infos</Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  ))
                : ""}
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
}

export default Search;
