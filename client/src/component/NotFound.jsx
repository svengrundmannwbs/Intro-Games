import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="gradient"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <main className="container">
        <div className="error"></div>
        <div>
          <h1>404-Oops! You seem to be lost.</h1>
          <p>Here is your way out:</p>
          <Link to="/">Start</Link>&nbsp;
          <Link to="/articles">Articles</Link>&nbsp;
          <Link to="/games">Games</Link>&nbsp;
          <Link to="/search">Archived Games</Link>&nbsp;
        </div>
      </main>
    </motion.div>
  );
}
