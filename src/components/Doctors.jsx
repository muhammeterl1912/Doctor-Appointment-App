import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AddModal from "./AddModal";
import { doctorData } from "../helpers/data";

const Doctors = ({ appointment, setAppointment }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const addAppointment = (newAppointment) => {
    setAppointment([...appointment, newAppointment]);
  };

  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({ img, name: drName, dep, id }) => (
          <Col xs={12} sm={6} lg={3} key={id}>
            <Image
              src={img}
              alt={drName}
              onClick={() => {
                setShow(true);
                setName(drName);
              }}
              className="img-thumbnail doctor-img w-100"
            />
            <h5>{drName}</h5>
            <p>{dep}</p>
          </Col>
        ))}
      </Row>
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        drName={name}
        addAppointment={addAppointment}
      />
    </Container>
  );
};

export default Doctors;
