import { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Card,
  ProgressBar,
} from "react-bootstrap";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import useOwnAPI from "../hooks/useOwnAPI";
import "./search.css";

function Search() {
  const { response, loading, error } = useOwnAPI({
    method: "GET",
    url: "/search",
  });

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setResults(response);
    }
  }, [response]);

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function filterItems(arr, query) {
    return arr.filter(
      (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  const [showResults, setShowresults] = useState([]);
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
                  placeholder="Search for game name"
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
                ? showResults.map((game, key) => (
                    <motion.div
                      className="stagCard"
                      key={"id" + game.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
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
                          <Card.Title>
                            {game.name}
                            {"  "} <small>({game.release_year})</small>
                          </Card.Title>
                          <Card.Text>Publisher: {game.publisher}</Card.Text>

                          <ProgressBar
                            key={"progress" + key}
                            now={game.rating}
                            label={`Rating: ${game.rating} / 100`}
                          />
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
