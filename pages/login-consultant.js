import Head from "next/head";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    const localStorage = window.localStorage;
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken !== null) {
      window.location = "/doct-page";
    }
  });

  async function handleLogin(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.querySelector("input[name=email]").value;
    const password = form.querySelector("input[name=password]").value;
    const data = { email, password };

    const url = "https://conby-backend.herokuapp.com/consultant/login";

    // request header
    const opt = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(url, opt);
      const json = await res.json();

      if (json.status === 200) {
        const { accessToken } = json.data;

        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("consultantId", consultant._id);
        window.location = "/doct-page";
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

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="img/iconby.png" type="image" sizes="16x16" />
        <link href="credentials.css" rel="stylesheet" />
        <title>Login Konsultan</title>
      </Head>
      <>
        <div className="row">
          <div className="col-6" id="main">
            <div className="container">
              <img src="img/conby-login.png" id="logo1" alt="logo conby" />
              <h1 className="main">Masuk</h1>
              <p>Selamat datang di Conby!</p>
              {/* <!-- belum sesuai design --> */}
              <form
                method="POST"
                action="/login-consultant"
                onSubmit={handleLogin}
              >
                <div className="label" id="consultant">
                  Email<span className="required">*</span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="masukkan alamat email"
                />
                <div className="label">
                  Kata Sandi<span className="required">*</span>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="masukkan kata sandi"
                />
                <button
                  className="btn button-outline submit consul-submit"
                  type="submit"
                >
                  Masuk
                </button>
              </form>
            </div>
          </div>
          <div className="col-6" id="right-illus">
            <img
              src="img/lg-illus.png"
              alt="Seorang ibu sedang berkonsultasi dengan seorang dokter sambil memangku anaknya"
            />
          </div>
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </>
    </>
  );
}
