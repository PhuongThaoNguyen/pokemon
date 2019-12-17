import "./App.css";
import React, { Component } from "react";
import { Row, Col, Card, Progress } from "antd";
import Axios from "axios";
import iconSearch from "./search.png";
import cute from './cute.png'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
};

class App extends Component {
  state = {
    pokemons: []
  };
  componentDidMount() {
    Axios.get("http://localhost:3030/api/cards").then(res => {
      const pokemons = res.data.cards;
      this.setState({ pokemons });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="topbar">My Pokedex</div>
        <div className="app-container">
          <Row className="card-row" gutter={16}>
            {this.state.pokemons.map(pokemon => (
              <Col className="gutter-row" span={12}>
                <Card className="card-item">
                  <div className="image">
                    <img
                      src={pokemon.imageUrl}
                      alt="pokemon"
                    />
                  </div>
                  <div className="content">
                    <div className="content-title">{pokemon.name}</div>
                    <div className="content-feature">
                      <div className="item">
                        <div className="name">HP</div>
                        <Progress percent={pokemon.hp} showInfo={false} />
                      </div>
                      <div className="item">
                        <div className="name">STR</div>
                        <Progress percent={50} showInfo={false} />
                      </div>
                      <div className="item">
                        <div className="name">WEAK</div>
                        <Progress percent={50} showInfo={false} />
                      </div>
                    </div>
                    <div className="content-icon">
                    <img src={cute} alt="cute image"/>
                    <img src={cute} alt="cute image"/>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="footer">
          <div className="footer__img">
            <img src={iconSearch} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
