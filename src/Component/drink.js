import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import "antd/dist/antd.css";
import "./drink.css";

export default class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
      visible: false,
    };
  }

  handleButton = (results) => {
    // alert("Spesifikasi : " + steps);
    this.setState({
      visible: true,
      drink: results.drink,
      dprice: results.dprice,
      ddetail: results.ddetail,
    });
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:3333/data",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          recipe: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#E8DFD8" }}>
        <marquee
          style={{ height: "30px", fontWeight: "bold", color: "#FFFAFA" }}
          bgcolor="#523A28"
          align="center"
          direction="left"
          scrollamount="10"
        >
          {" "}
          Annyeong Chingu ^_^ Selamat datang di Cafe 7 Dream
        </marquee>
        <div style={{ marginTop: 20 }}>
          <center>
            <input
              className="search"
              style={{ color: "#6e0234", height: "50px" }}
              placeholder="Masukkan Nama Minuman"
            />
            <button type="submit" class="searchButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </center>
          <div className="marquee">
            <center>
              <h3> ... Mencari data ...</h3>
            </center>
          </div>
          <Grid
            container
            md={11}
            spacing={4}
            style={{ margin: "auto", backgroundColor: "#E8DFD8" }}
            direction="row"
            justifyContent="flex-start"
            alignItems="strech"
          >
            <Modal
              title="Keterangan"
              centered
              visible={this.state.visible}
              onOk={() => this.setState({ visible: false })}
              onCancel={() => this.setState({ visible: false })}
              width={500}
            >
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "Segoe UI",
                  }}
                >
                  {this.state.drink}
                </p>
                <p style={{ fontSize: 15, fontFamily: "Segoe UI" }}>
                  Harga {this.state.fdrink}
                </p>
                <p style={{ fontSize: 15, fontFamily: "Segoe UI" }}>
                  {" "}
                  {this.state.ddetail}
                </p>
              </div>
            </Modal>

            {this.state.recipe.map((results, index) => {
              return (
                <Grid item key={results.drink} md={3}>
                  <Card>
                    <CardActionArea onClick={() => this.handleButton(results)}>
                      <CardContent
                        style={{
                          backgroundColor: "rgba(0,0,0,0.02)",
                          textAlign: "center",
                          color: "#000000",
                        }}
                      >
                        <CardMedia
                          style={{
                            height: "200px",
                            margin: "auto",
                            //paddingTop: "5%",
                            // margin: "1px",
                            // padding: "auto",
                            borderRadius: "8px",
                            // height: "80px",
                            // width: "80px"
                          }}
                          component="img"
                          image={results.durl}
                        />

                        <Typography style={{ fontWeight: "bold" }}>
                          <br />
                          {results.drink}
                        </Typography>
                        <Typography>Harga : {results.dprice}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
