import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Divider, Button, Input } from "antd";
import Requester from "./requesters/Requester";

const requester = new Requester();

export default function App() {
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState(" : Click to change");
  const [text2, setText2] = useState("");

  useEffect(() => {
    checkSever()
  }, []);

  async function checkSever() {
    let res = await requester.checkSever();
    setText0(res)
  }

  async function getRequest() {
    let res = await requester.getRequest();
    setText1(res["test"]);
  }



  async function postRequest() {
    let res = await requester.postRequest(text2);
    setText2(res);
  }

  function handleTextChange (e) {
    setText2(e.target.value)
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Divider />
      {text0}
      <Divider />
      <Button onClick={getRequest}>GET REQUEST</Button>
      {text1}
      <Divider />
      <Button onClick={postRequest}>POST REQUEST</Button>
      <Input onChange = {handleTextChange} placeholder="POST REQUEST" />
      From Server : {text2}
    </div>
  );
}
