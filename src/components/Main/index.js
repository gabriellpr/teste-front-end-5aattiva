import React, { Component } from "react";
import CryptoJS from "crypto-js";

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
      `/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`
    );

    const image = response.data.data.results[0].thumbnail.path + ".jpg";
    console.log(image);

    this.setState({ personagens: response.data.data.results });
  };

  render() {
    const { personagens } = this.state;

    return (
      <div className="marvel-list">
        <h1>Character</h1>
        <div className="busca">
          <input />
          <img alt="" />
        </div>

        {personagens.map((personagem) => (
          <div>
            <div className="linha">
              <article className="personagem" key={personagem.id}>
                <img src={personagem.thumbnail.path + ".jpg"} />
                <h2>{personagem.name}</h2>
                <h3>{personagem.description}</h3>
              </article>
            </div>
          </div>
        ))}

        <div>
          <div className="linha">
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>Descricao</p>
            </div>
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
          </div>
          <div className="linha">
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
          </div>
          <div className="linha">
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
            <div className="personagem">
              <img />
              <h2>Heroi</h2>
              <h3>Nome</h3>
              <p>descircao</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
