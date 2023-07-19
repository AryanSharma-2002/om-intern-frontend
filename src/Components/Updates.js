import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import "../css/updates.css";

const Updates = ({ title, data, link, allPage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null); // State to keep track of the selected image URL
  const [selectedTitle, setSelectedTitle] = useState(null); // State to keep track of the selected image URL

  const openModalWithImage = (imageURL, title) => {
    setSelectedImage(imageURL);
    setSelectedTitle(title);
    onOpen();
  };

  return (
    <div className="latest-container">
      <div className="top">
        <h2 className="heading">{title}</h2>
        {allPage ? (
          ""
        ) : (
          <div className="right-link">
            <Link to={link}>View all updates</Link>
          </div>
        )}
      </div>
      <div
        className={`all-boxes-wrapper ${
          data.length > 4 ? "wrapClass" : "noWrapClass"
        }`}
      >
        {data.map((ele, i) => {
          return (
            <div className="box" key={i}>
              <img
                src={ele.img}
                alt="updates image"
                className="updates-img"
                onClick={() => openModalWithImage(ele.img, ele.title)} // Show the modal with the clicked image
              />

              <Modal size={"xs"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent style={{ marginTop: "10px" }}>
                  <ModalHeader>{selectedTitle}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="updates image"
                        className="updates-img-modal"
                      />
                    )}
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <div className="desc">
                <h3 className="title">{ele.title}</h3>
                <p className="date">{ele.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Updates;
