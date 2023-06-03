import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./SearchModal.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Searchcontext } from "../../../context/SearchContext";

const SearchModal = ({ showModal, setShowModal }) => {
  const { handleSearchQuery } = useContext(Searchcontext);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  handleSearchQuery(searchText);
  const handlekey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setShowModal(false);
      navigate("/search");
    }
  };

  return (
    <div>
      <Modal show={showModal} className="w-100 test-modal">
        <Modal.Body>
          <form
            class="d-flex "
            role="search"
            style={{ width: "60%" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={handlekey}
            ></input>
            <button
              class="btn-close"
              aria-label="Close"
              onClick={() => setShowModal(false)}
            ></button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SearchModal;
