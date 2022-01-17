import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import KendoGrid from "../components/KendoUIGrid";
import Register from "../components/Register";

//const client = new WebSocket("ws://192.168.0.14:80/client-sub", "ws+meta.nchan")

export default function Scoreboard() {
  const [messages, setMessages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [ws, setWs] = useState(new WebSocket("ws://192.168.0.14:80/client-sub", "ws+meta.nchan"));
  useEffect(() => {
    ws.onopen = () => {
      console.log("Websocket client connected")
    }
    ws.onmessage = (datas) => {
      const message = JSON.parse(datas.data.split("\n")[3]);
      console.log(message);
      setMessages(message.data);
    }


    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket("ws://192.168.0.14:80/client-sub", "ws+meta.nchan"));
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messages]);

  useEffect(() => {
    
    fetch("http://192.168.0.14/country")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.payload)
        setCountries(myJson.payload);
      })
    
  }, []);
  
  return (
    <>
      <h2>Scoreboard</h2>
      {/* <Table columns={columns} data={data} /> */}
      
      <Register countries={countries}></Register>
      <KendoGrid data={messages}></KendoGrid>
    </>
  );
}
