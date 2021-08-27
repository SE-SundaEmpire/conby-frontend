import Head from "next/head";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="home.css" />
        <link rel="icon" href="img/icon.svg" type="image" sizes="16x16" />

        <title>Conby</title>
      </Head>

      <>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-br/and" href="#">
              <img
                src="img/logo1.svg"
                style={{ width: "145px", height: "42px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ paddingLeft: "5em" }}
                >
                  Beranda
                </a>
                <a
                  className="nav-link active"
                  href="#"
                  style={{ paddingLeft: "3em" }}
                >
                  Forum
                </a>
                <a
                  className="nav-link active"
                  href="#"
                  style={{ paddingLeft: "3em" }}
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-outline-info me-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  borderRadius: "40px",
                  width: "108px",
                  height: "40px",
                  fontSize: "16px",
                }}
              >
                Masuk
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #00B0D9",
                  boxSizing: "border-box",
                }}
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="/login-user"
                    style={{ color: "#586A86" }}
                  >
                    Pelanggan
                  </a>
                </li>
                <li>
                  <hr
                    className="dropdown-divider"
                    style={{ color: "#00B0D9" }}
                  />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/login-consultant"
                    style={{ color: "#586A86" }}
                  >
                    Konsultan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="column" id="mainsection">
            <h1>
              Solusi Tepat Untuk <br />{" "}
              <span style={{ textDecoration: "underline", color: "#094AA9" }}>
                Konsultasi
              </span>{" "}
              Kesehatan <br /> Buah Hati Anda
            </h1>
            <br />
            <p>
              Lebih dari 100 dokter berpengalaman siap <br /> membantu dalam
              konsultasi permasalahan <br /> kesehatan yang terjadi pada buah
              hati anda
            </p>
            <br />
            <button
              className="btn btn-info me-2"
              type="button"
              style={{ color: "white" }}
            >
              {" "}
              Mulai Konsultasi &emsp;
              <img src="img/icondart.png" />
            </button>
          </div>
          <div className="column">
            <img src="img/Group 664.png" />
          </div>
        </div>
        <div
          className="row"
          style={{ backgroundColor: "#F4F7FA", marginBottom: "0px" }}
        >
          <div className="column" style={{ flex: "75%" }}>
            <h1
              style={{
                marginLeft: "4.8em",
                fontWeight: "bold",
                fontSize: "36px",
              }}
            >
              Dokter terbaik yang siap membantu anda
            </h1>
          </div>
          <div
            className="column"
            style={{ textAlign: "right", paddingRight: "11em" }}
          >
            <a
              className="nav-link"
              href="#"
              style={{ fontSize: "18px", fontWeight: "bold", color: "#00B0D9" }}
            >
              Lihat Semua &emsp;
              <img src="img/icondart.png" />
            </a>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#F4F7FA" }}>
          <div className="container" id="docsection">
            <div>
              <p id="rating">Rating</p>
              <img src="img/doc1.png" />
              <p>
                dr. Alfian Jafar, Sp.A <br />
                <span style={{ fontSize: "18px", color: "#586A86" }}>
                  Dokter Anak
                </span>
              </p>
              <hr style={{ marginLeft: "10%", marginRight: "10%" }} />
              <p style={{ color: "#ED4242" }}>Rp 300.000</p>
            </div>
            <div>
              <p id="rating">Rating</p>
              <img src="img/doc2.png" />
              <p>
                dr. Amanda Sari, Sp.A <br />
                <span style={{ fontSize: "18px", color: "586A86" }}>
                  Dokter Anak
                </span>
              </p>
              <hr style={{ marginLeft: "10%", marginRight: "10%" }} />
              <p style={{ color: "#ED4242" }}>Rp 300.000</p>
            </div>
            <div>
              <p id="rating">Rating</p>
              <img src="img/doc3.png" />
              <p>
                dr. Muh Harudin, Sp.A <br />
                <span style={{ fontSize: "18px", color: "#586A86" }}>
                  Dokter Anak
                </span>
              </p>
              <hr style={{ marginLeft: "10%", marginRight: "10%" }} />
              <p style={{ color: "#ED4242" }}>Rp 300.000</p>
            </div>
            <div>
              <p id="rating">Rating</p>
              <img src="img/doc4.png" />
              <p>
                dr. Lusia Septari, Sp.A <br />
                <span style={{ fontSize: "18px", color: "#586A86" }}>
                  Dokter Anak
                </span>
              </p>
              <hr style={{ marginLeft: "10%", marginRight: "10%" }} />
              <p style={{ color: "#ED4242" }}>Rp 300.000</p>
            </div>
          </div>
        </div>
        <div className="row">
          <h1
            style={{
              textAlign: "center",
              fontSize: "36px",
              fontWeight: "bold",
              lineHeight: "52px",
            }}
          >
            {" "}
            Kenapa Harus Conby ?
          </h1>
          <div className="container" id="whysection">
            <div>
              <img src="img/why1.png" />
              <p>Konsultasi lebih intens dengan Video Call</p>
            </div>
            <div>
              <img src="img/why2.png" />
              <p>
                Dokter berpengalaman <br />
                dan bersertifikat
              </p>
            </div>
            <div>
              <img src="img/why3.png" />
              <p>
                Proses booking jadwal <br /> dan pembayaran mudah
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "0px" }} id="ads">
          <div className="column">
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "white",
                lineBreak: "52px",
              }}
            >
              Ayo mulai konsultasimu bersama Conby!
            </h1>
            <br />
            <button
              className="btn btn-info me-2"
              type="button"
              style={{ position: "absolute", color: "white" }}
            >
              {" "}
              Daftar Sekarang &emsp;
              <img src="img/icondart.png" />
            </button>
          </div>
        </div>
        <div
          className="row"
          style={{
            backgroundColor: "#00234E",
            marginBottom: "0px",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
          id="info"
        >
          <div className="column" style={{ flex: "30%" }}>
            <img
              src="img/logo2.svg"
              style={{ width: "145px", height: "42px" }}
            />
            <p style={{ paddingTop: "2em" }}>
              Conby adalah website penyedia <br />
              jasa layanan konsultasi kesehatan anak
              <br /> dengan dokter terbaik di Indonesia
            </p>
          </div>
          <div className="column" style={{ flex: "10%" }}>
            <h2> Navigasi</h2>
            <br />
            <a className="nav-link" href="#">
              Beranda
            </a>
            <a className="nav-link" href="#">
              Cari Dokter
            </a>
            <a className="nav-link" href="#">
              Artikel
            </a>
            <a className="nav-link" href="#">
              Forum
            </a>
          </div>
          <div className="column" style={{ flex: "20%" }}>
            <h2> Hubungi Kami</h2>
            <br />
            <p>
              Gedung Mewah, Jalan Belak-belok No.12, Bojongsoang, Bandung 12230
              <br />
              Phone : 0290102038
              <br />
              E-mail : conby.co@gmail.com
            </p>
          </div>
        </div>
        <div
          className="row"
          style={{
            backgroundColor: "#00234E",
            marginBottom: "0px",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <div className="container">
            <hr style={{ color: "white" }} />
          </div>
          <div className="column" style={{ flex: "75%", marginTop: "0px" }}>
            <p style={{ fontSize: "18px", color: "white" }}>
              {" "}
              Copyright © 2021 Conby. All rights reserved
            </p>
          </div>
          <div
            className="column"
            style={{ textAlign: "right", marginTop: "0px" }}
          >
            <p style={{ color: "white;" }}>
              {" "}
              Ikuti Kami :&emsp;
              <img src="img/facebook.png" />
              &emsp;
              <img src="img/twitter.png" />
              &emsp;
              <img src="img/instagram.png" />
            </p>
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
