import React, { Component } from 'react';
import {Button, CardBody, Col, Row} from 'reactstrap';
import { Grid, Image, Card, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import me from  '../images/me2.png';
import twitter from '../images/Twitter.png'
import linkedIn from '../images/LinkedIN.png'
import mail from '../images/Mail.png'



class HomePage extends Component {
  render() {
    return (
      <div>
        <Container textAlign="center">
          <Image src={me} id="my-hero-image" />
          <div className="main-headerText" id="homepage-header-text">Thanks for stopping by!</div>
          <div className="main-subText" id="homepage-header-sub-text">
              Let's Connect!
          </div>
          <div id="homepage-header-sub-text">
            <a href="https://twitter.com/ademusoyo" target="_blank"><img src={twitter} id="social"/></a>
            <a href="https://twitter.com/ademusoyo" target="_blank"><img src={linkedIn} id="social"/></a>
            <a href="mailto:ademusoyo@gmail.com" target="_blank"><img src={mail} id="social"/></a>
          </div>
        </Container>
      </div>
    )
  }
}

export default HomePage;
