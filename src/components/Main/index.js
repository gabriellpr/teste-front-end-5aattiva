import React, { Component } from "react";
import CryptoJS from "crypto-js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../bootstrap.css";
import "./styles.css";

import api from "../../services/api";

const apikey = "b875e24be150d43bd3ff818aebcd85de";
const privatekey = "7556c301fa18ac847b3bc1c61deffcbf3f4c47b1";
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + privatekey + apikey).toString(CryptoJS.enc.Hex);

export default class Main extends Component {
  state = {
    personagens: [],
  };

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = async () => {
    const response = await api.get(
      `/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=12`
    );

    const image = response.data.data.results[0].thumbnail.path + ".jpg";
    console.log(image);

    this.setState({ personagens: response.data.data.results });
  };

  render() {
    const { personagens } = this.state;

    const Cell = () => (
      <div>
        {personagens.map((personagem) => (
          <article className="personagem" key={personagem.id}>
            <img src={personagem.thumbnail.path + ".jpg"} />
            <h2>{personagem.name}</h2>
          </article>
        ))}
      </div>
    );

    return (
      <div>
        <div className="marvel-list">
          <h1>Character</h1>
          <div className="busca">
            <input value="Characters" />
            <img alt="" />
          </div>
          <div>
            <Container className="">
              <Row className="">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                  <Col className="" xs="3">
                    {personagens.map((personagem) => (
                      <article className="personagem" key={personagem.id}>
                        <img
                          className="personagens-foto"
                          src={personagem.thumbnail.path + ".jpg"}
                        />
                        <h2>{personagem.name}</h2>
                      </article>
                    ))}
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
