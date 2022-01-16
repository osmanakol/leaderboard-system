import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import KendoGrid from "../components/KendoUIGrid";
import WebSocket from "ws";

const client = new WebSocket("ws://192.168.0.14:80/client-sub", "ws+meta.nchan")

export default function Scoreboard() {
  const [data, setData] = useState([]);
  componentWillMount(() => {
    client.onopen = () => {
      console.log("Websocket client connected")
    }
    client.onmessage = (message) => {
      console.log(message)
    }
  });
  useEffect(() => {
    setTimeout(
      () =>
        fetch("./api.json")
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) {
            setData(myJson);
          }),
      200
    );
  }, []);
  
  return (
    <>
      <h2>Scoreboard</h2>
      {/* <Table columns={columns} data={data} /> */}
      <KendoGrid data={data}></KendoGrid>
    </>
  );
}
