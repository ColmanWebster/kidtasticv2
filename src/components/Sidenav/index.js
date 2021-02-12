import React from "react";
import { Nav, Icon } from "rsuite";
import { Link } from "react-router-dom";
import "./navstyle.css";
function Sidebar() {
  const styles = {
    padding: "5px",
    border: "10px solid black",
    borderRadius: "5px",
  };
  return (
    <div>
      <Nav justified style={styles}>
        <Nav.Item active icon={<Icon icon="home" />} className="navtitle">
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/projects" className="navtitle">
            Projects
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/books" className="navtitle">
            Books
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="navtitle">
            About
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default Sidebar;
