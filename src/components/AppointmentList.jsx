import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import AddModal from "./AddModal";

const AppointmentList = ({ appointment, setAppointment }) => {
  const handleDelete = (id) => {
    setAppointment(appointment.filter((item) => id !== item.id));
  };

  const handleEdit = (id) => {
    setAppointment(
      appointment.map((item) =>
        id !== item.id ? { ...item } : { ...item, consulted: !item.consulted }
      )
    );
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {appointment.length ? (
        appointment.map(({ id, date, patient, doctor, consulted }) => (
          <Row
            key={id}
            className={`appointments justify-content-between align-items-center mx-auto ${
              consulted ? "consulted" : ""
            }`}
          >
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h4>Date: {new Date(date).toLocaleDateString()}</h4>
              <h5>Time: {new Date(date).toLocaleTimeString()}</h5>
            </Col>
            <Col className="text-end">
              <TiTickOutline
                type="button"
                className="text-success display-6"
                onClick={() => handleEdit(id)}
              />
              <MdDelete
                type="button"
                className="text-danger display-6"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        ))
      ) : (
        <img
          src="./img/appointment.jpg"
          alt="no Appointments"
          className="w-50"
        />
      )}
    </Container>
  );
};

export default AppointmentList;
