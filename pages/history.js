import Head from "next/head";
import { useEffect } from "react";

export default function History() {
  useEffect(() => {
    const localStorage = window.localStorage;
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken !== null) {
      window.location = "/profile";
    }
  });
  async function historyshow(event) {
    event.preventDefault();

    const url =
      "https://conby-backend.herokuapp.com/users/order-history/" + accessToken;

    const opt = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-accessToken": accessToken,
      },
    };

    try {
      const res = await fetch(url, opt);
      const json = await res.json();

      if (json.status === 200) {
        const { accessToken } = json.data;

        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("userId", user._id);
      } else if (json.status === 401) {
        alert(json.message);
      } else {
        alert("unknown error");
      }
    } catch (err) {
      console.error(err);
      alert("internal server error");
    }
  }
  return <></>;
}
