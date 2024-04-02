import Container from "react-bootstrap/Container"
import { Row,Col } from "react-bootstrap"
import{doctorData} from "../helpers/data"
import Image from "react-bootstrap/Image"
import AddModal from "./AddModal"
import { useState } from "react"
const Doctors = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
    <Row>
   {
    doctorData.map(({img,name,dep,id}) => <Col xs={12} sm={6} lg={3} key={id} >
      <Image src={img} alt={name} onClick={()=>setShow(true)} className="img-thubnail doctor-img w-100"/> 
      <h5>{name}</h5>
      <p>{dep}</p>
    </Col>)
   }
    </Row>
    <AddModal show={show} handleClose={()=>setShow(false)}/>
    </Container>
  )
}

export default Doctors
