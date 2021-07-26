import React, {useState } from "react";

import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import NewsImage from "./Components/NewsImage";
import Heading from "./Components/Heading";
import VoiceSocial from "./Components/VoiceSocial";
import Content from "./Components/Content";
import NextIcon from "./Components/NextIcon";
import PreviousIcon from "./Components/PreviousIcon";
import RefreshIcon from "./Components/RefreshIcon";
import myArray from "./Components/myjson";
import NewYork from './Components/NewYork';

library.add(fas);
library.add(fab);

function App() {
 
  //State = 0
  const [page , setPage] = useState(0);
 //console.log(myArray[0].url);
 
  function decreament() {
    setPage((prevState) => {
      if(prevState !== 0) {
        return prevState - 1;
      }
      else{
        return 9;
      }
    })
  }
  function increament() {
    setPage((prevState) => {
      if(prevState !== 9) {
        return prevState + 1;
      }
      else{
        return 0;
      }
    })
  }

  function refreshFunction() {
    setPage(0);
  }
function AddToHome(){
  alert('Add to Home Screen')
}
 
  
 
  return (
    <div>
      <Container fluid>
        {/*FONT_IMAGE_PUNCHY_NEWS  */}
        <Row className="justify-content-md-center">
          <Col xs={12} sm={12} md={4}>
            <Image
              src="https://punchy.news/static/punchy-news-banner.png"
              rounded
              fluid
            />
          </Col>
        </Row>
        <br/>
        {/* NEWS IMAGE-COMPONENT*/}
        <Row>
          <Col>
            <NewsImage image_url = {myArray[page].urlToImage} />
          </Col>
        </Row>
         <br/>
         <br/>
        {/* HEADING -COMPONENT */}
        <Row className="justify-content">
          <Col>
            <Heading heading_note = {myArray[page].title}/>
          </Col>
        </Row>
        {/*  ICONS-VOICE-SOCIAL-MEDIA-COMPONENT */}
        <Row className="icondiv">
          <Col>
            <VoiceSocial heading_note={myArray[page].title}  content={myArray[page].description}/>
          </Col>
        </Row>
        <br/>
       
        {/* CONTENT -COMPONENT*/}
        <Row>
          <Col className="content">
            <Content content_note = {myArray[page].description} />
          </Col>
        </Row>
        <br/>
        {/*NEWYORKTIMES*/}
        <Row>
          <Col className="nytimes">
           <NewYork url = {myArray[page].url}/>
          </Col>
        </Row>

        {/* ADD_TO_HOME */}
        <Row className="addhome">
          <Button variant="outline-primary" onClick={AddToHome} >Add to Home Screen</Button>
        </Row>

        </Container>
        {/* FOOTER-COMPONENT */}
        <Container fluid>
        <Row className="footer">
          <Col>
            <PreviousIcon onPrevHandle = {decreament}/>
          </Col>

          <Col>
            <RefreshIcon onRefreshHandle = {refreshFunction}/>
          </Col>

          <Col>
            <NextIcon onNextHandle = {increament}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
