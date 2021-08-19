import Head from "next/head";
import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    const localStorage = window.localStorage;
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken !== null) {
      window.location = "/profile";
    }
  });

  async function handleRegister(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.querySelector("input[name=email]").value;
    const password = form.querySelector("input[name=password]").value;
    const password2 = form.querySelector("input[name=password2]").value;
    const agreement = form.querySelector("input[name=tnc]").checked;
    const data = { email, password, password2 };

    // console.log(email, password, password2, agreement);
    // return;

    if (agreement === false) {
      alert(
        "Anda perlu menyetujui Syarat dan Ketentuan serta Kebijakan Privasi Conby."
      );
      return;
    }

    const url = "https://conby-backend.herokuapp.com/users/register";

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

      if (json.status === 201) {
        window.location = "/login";
      } else if (json.status === 400) {
        let errMessage = "";
        json.errors.forEach((err) => {
          errMessage += err.msg + "\n";
        });
        alert(errMessage);
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
        <title>Sign Up</title>
      </Head>
      <>
        <div className="row">
          <div className="col-6" id="main">
            <div className="container">
              <img src="img/conby-login.png" id="logo1" alt="logo conby" />
              <h1 className="main">Daftar</h1>
              <p>Yuk buat daftarkan akunmu sekarang juga!</p>
              <button className="btn button-outline google" type="button">
                <img src="img/google-logo.png" id="logo2" />
                Daftar dengan google
              </button>
              <div className="row" id="divider">
                {/* <!-- border and div detail --> */}
                <div className="col-4" id="hr">
                  <hr />
                </div>
                <div className="col-4" id="div-text">
                  atau daftar dengan
                </div>
                <div className="col-4" id="hr">
                  <hr />
                </div>
              </div>
              {/* <!-- belum sesuai design --> */}
              <form method="POST" action="/register" onSubmit={handleRegister}>
                <div className="label">
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
                <div className="label">
                  Konfirmasi Kata Sandi<span className="required">*</span>
                </div>
                <input
                  type="password"
                  name="password2"
                  placeholder="konfirmasi kata sandi"
                />
                <div className="form-check">
                  <input
                    className="form-check-input checkbox"
                    type="checkbox"
                    name="tnc"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    <div className="agreement">
                      Dengan mendaftar saya telah menyetujui&nbsp;
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#SyaratKetentuan"
                      >
                        Syarat dan Ketentuan
                      </a>
                      , serta Kebijakan Privasi Conby
                    </div>
                  </label>
                </div>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="SyaratKetentuan"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title snk" id="SyaratKetentuan">
                          Syarat dan Ketentuan
                        </h5>
                      </div>
                      <div className="modal-body">HALO</div>
                    </div>
                  </div>
                </div>
                {/* <!-- MODAL --> */}
                <button className="btn button-outline submit" type="submit">
                  Daftar
                </button>
              </form>
              <div className="footer signup">
                Sudah punya akun? <a href="/login">Masuk</a>
              </div>
            </div>
          </div>
          {/* <!--PEMBATAS : POSITIONING TROUBLE--> */}
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
