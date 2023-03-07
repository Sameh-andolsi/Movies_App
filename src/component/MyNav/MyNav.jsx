
import React from "react";
import { Navbar, Container, Button, Modal } from "react-bootstrap";
import ReactStars from "react-stars";
import { useState } from "react";
import "./MyNav.css";
import { v4 as uuidv4 } from "uuid";
const MyNav = ({ filtredMovies, setFiltredMovies, setTitleSearch, setRatingSearch }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    posterURL: "",
    description: "",
    rating: 1,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    console.log(newMovie, "in the inputchange")
  };

  const handleSave = () => {
if (newMovie.rating >= 1 && newMovie.rating <= 5) {
  setFiltredMovies([...filtredMovies, newMovie]);
  handleClose();
} else {
  alert("the rating should be between 1 and 5");
}
console.log(newMovie," in the save button")
  
    }
 

  const handleTitleSearch = (e) => {
    setTitleSearch(e.target.value);
  };

  const handleRatingSearch = (new_rating) => {
    setRatingSearch(new_rating);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Movies Night</Navbar.Brand>
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Search"
              type="search"
              class="input"
              onChange={handleTitleSearch}
            />
          </div>

          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            half={false}
            onChange={handleRatingSearch}
          />

          <Button className="btnNav" onClick={handleShow}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                ></path>
              </svg>{" "}
              Add movies
            </span>
          </Button>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movies</Modal.Title>
        </Modal.Header>
        <Modal.Body className="form">
          <label for="title">title:</label>
          <br />
          <input
            className="inpt"
            name="title"
            type="text"
            placeholder="Enter the  title "
            onChange={handleChange}
          />
          <br />
          <br />
          <label for="posterURL">posterURL:</label>
          <br />
          <input
            className="inpt"
            name="posterURL"
            type="text"
            placeholder="Enter the  poster Url"
            onChange={handleChange}
          />
          <br />
          <br />
          <label for="description">description:</label>
          <br />
          <textarea
            className="inpt"
            type="text"
            id="description"
            name="description"
            required="Enter the Description"
            onChange={handleChange}
          ></textarea>
          <br />
          <br />
          <label for="rating">rating:</label>
          <br />
          <input
            className="inpt"
            name="rating"
            type="number"
            onChange={handleChange}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn2" variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" className="btn2" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  }
export default MyNav;
