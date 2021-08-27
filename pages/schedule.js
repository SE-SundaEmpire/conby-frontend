import Head from "next/head";

export default function UserSchedule() {
  return (
    <>
      <Head>
        {/* // Required meta tags */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* // Bootstrap CSS */}
        <link rel="stylesheet" type="text/css" href="history.css" />
        <link rel="icon" href="iqmg/icon.svg" type="image" sizes="16x16" />
        <title>Jadwal Konsultasi</title>
      </Head>

      <>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="iqmg/logo1.svg" style="width: 145px; height: 42px" />
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
                  style="padding-left: 5em"
                >
                  Beranda
                </a>
                <a
                  className="nav-link active"
                  href="#"
                  style="padding-left: 3em"
                >
                  Forum
                </a>
                <a
                  className="nav-link active"
                  href="#"
                  style="padding-left: 3em"
                >
                  Jadwal Konsultasi
                </a>
                <a
                  className="nav-link active"
                  href="#"
                  style="padding-left: 3em"
                >
                  Riwayat
                </a>
                <a
                  className="nav-link active"
                  href="#"
                  style="padding-left: 3em;"
                >
                  <img src="img/Notification.png" />
                </a>{" "}
                */
                <div className="dropdown" style="padding-left: 15em">
                  <button
                    className="btn me-2"
                    type="button"
                    id="dropnotif"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="iqmg/Notification.png" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropnotif"
                    style="
                  border-radius: 10px;
                  border: 1px solid #00b0d9;
                  box-sizing: border-box;
                "
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        style="color: #586a86"
                      >
                        Notif a
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" style="color: #00b0d9" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        style="color: #586a86"
                      >
                        Notif b
                      </a>
                    </li>
                  </ul>
                </div>
                <a style="padding-left: 3em">
                  <img src="iqmg/userpic.png" style="height: 40px" />
                </a>
                <a
                  className="nav-link disabled"
                  id="namebar"
                  href="#"
                  style="padding-left: 2em"
                >
                  Hiken No Ace
                </a>
                <div className="dropdown">
                  <button
                    className="btn me-2"
                    type="button"
                    id="dropprof"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="iqmg/dropdown.png" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropprof"
                    style="
                  border-radius: 10px;
                  border: 1px solid #00b0d9;
                  box-sizing: border-box;
                "
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        style="color: #586a86"
                      >
                        Pelanggan
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" style="color: #00b0d9" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        style="color: #586a86"
                      >
                        Konsultan
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* // Button */}
        <div className="container" id="tombol" style="margin-top: 100px">
          <div id="myBtnContainer">
            <center>
              <button className="btn active" onClick="filterSelection('all')">
                Semua
              </button>
              <button className="btn" onClick="filterSelection('sudah')">
                Sudah Dibayar
              </button>
              <button className="btn" onClick="filterSelection('belum')">
                Belum Dibayar
              </button>
              <button className="btn" onClick="filterSelection('batal')">
                Dibatalkan
              </button>
            </center>
          </div>
        </div>
        {/* // EDIT DISINI */}
        <div>
          <div className="filterDiv sudah">
            <div className="sched-wrapper">
              <div
                className="container sched-details"
                style="margin-bottom: 20px; margin-top: 20px; height: 321px"
              >
                <div className="first-row" style="display: flex">
                  <div className="col-2.5">
                    <img
                      src="img/doc1.svg"
                      alt="Foto seorang dokter"
                      className="doct-pict"
                    />
                  </div>
                  <div className="col-8" style="margin-top: 33px">
                    <span className="doct-name">
                      dr. Alfian Jafar, Sp.A
                      <br />
                      <span className="doct-proff">Dokter Anak</span>
                    </span>
                  </div>
                  <div className="col-2">
                    <button className="btn disabled" id="paid">
                      Sudah Dibayar
                    </button>
                  </div>
                </div>
                {/* // BAGIAN RISQ */}
                <div className="sec-row" style="display: flex">
                  <div className="col-3" style="margin-left: 100px">
                    <p className="date">
                      <img src="img/Calendar.svg" />
                      &ensp;21 Agustus 2021
                    </p>
                  </div>
                  <div className="col-2" style="margin-left: 100px">
                    <p className="time">
                      <img src="img/Time Circle.svg" />
                      &ensp;10:00 AM
                    </p>
                  </div>
                </div>
                {/* // BAGIAN RISQ */}
                <hr className="divider" />
                <div style="margin: 25px 622px 20px 30px">
                  <p className="meet-details">Link tatap muka</p>
                </div>
                <div className="grey-container">
                  <span className="meet-url">
                    {/* https://meet.google.com/kqn-fxjp-rnd */}
                  </span>
                  <img
                    src="img/copycon.svg"
                    alt="copy icon"
                    className="copycon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="filterDiv belum">
            <div className="sched-wrapper">
              <div
                className="container sched-details unpaid-sect"
                style="margin-bottom: 20px; margin-top: 20px"
              >
                <div className="first-row" style="display: flex">
                  <div className="col-2.5">
                    <img
                      src="img/doc2.svg"
                      alt="Foto seorang dokter"
                      className="doct-pict"
                    />
                  </div>
                  <div className="col-8" style="margin-top: 33px">
                    <span className="doct-name">
                      dr. Amanda Sari, Sp.A
                      <br />
                      <span className="doct-proff">Dokter Anak</span>
                    </span>
                  </div>
                  <div className="col-2">
                    <button className="btn disabled" id="unpaid">
                      Belum Dibayar
                    </button>
                  </div>
                </div>
                {/* // BAGIAN RISQ */}
                <div className="sec-row" style="display: flex">
                  <div className="col-3" style="margin-left: 100px">
                    <p className="date">
                      <img src="img/Calendar.svg" />
                      &ensp;21 Agustus 2021
                    </p>
                  </div>
                  <div className="col-2" style="margin-left: 100px">
                    <p className="time">
                      <img src="img/Time Circle.svg" />
                      &ensp;10:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filterDiv batal">
            <div className="sched-wrapper">
              <div
                className="container sched-details cancelled-sect"
                style="margin-bottom: 20px; margin-top: 20px"
              >
                <div className="first-row" style="display: flex">
                  <div className="col-2.5">
                    <img
                      src="img/doc3.svg"
                      alt="Foto seorang dokter"
                      className="doct-pict"
                    />
                  </div>
                  <div className="col-8" style="margin-top: 33px">
                    <span className="doct-name">
                      dr. Muh Harudin, Sp.A
                      <br />
                      <span className="doct-proff">Dokter Anak</span>
                    </span>
                  </div>
                  <div className="col-2">
                    <button className="btn disabled" id="cancelled">
                      Dibatalkan
                    </button>
                  </div>
                </div>
                {/* // BAGIAN RISQ */}
                <div className="sec-row" style="display: flex">
                  <div className="col-3" style="margin-left: 100px">
                    <p className="date">
                      <img src="img/Calendar.svg" />
                      &ensp;21 Agustus 2021
                    </p>
                  </div>
                  <div className="col-2" style="margin-left: 100px">
                    <p className="time">
                      <img src="img/Time Circle.svg" />
                      &ensp;10:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // FOOTER */}
        <div
          className="row"
          style="
        background-color: #00234e;
        margin-top: 50px;
        margin-bottom: 0px;
        padding-left: 5%;
        padding-right: 5%;
      "
          id="info"
        >
          <div className="column" style="flex: 30%">
            <img src="iqmg/logo2.svg" style="width: 145px; height: 42px" />
            <p style="padding-top: 2em">
              Conby adalah website penyedia <br />
              jasa layanan konsultasi kesehatan anak
              <br />
              dengan dokter terbaik di Indonesia
            </p>
          </div>
          <div className="column" style="flex: 10%">
            <h2>Navigasi</h2>
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
          <div className="column" style="flex: 20%">
            <h2>Hubungi Kami</h2>
            <br />
            <p>
              Gedung Mewah, Jalan Belak-belok No.12, Bojongsoang, Bandung 12230
              <br />
              Phone : 0290102038
              <br />
              E-mail : synergybangoonconby@gmail.com
            </p>
          </div>
        </div>
        <div
          className="row"
          style="
        background-color: #00234e;
        margin-bottom: 0;
        padding-left: 5%;
        padding-right: 5%;
      "
        >
          <div className="container">
            <hr style="color: white" />
          </div>
          <div className="column" style="flex: 75%; margin-top: 0px">
            <p style="font-size: 18px; color: white">
              Copyright © 2021 Conby. All rights reserved
            </p>
          </div>
          <div className="column" style="text-align: right; margin-top: 0px">
            <p style="color: white">
              Ikuti Kami :&emsp;
              <img src="iqmg/facebook.png" />
              &emsp;
              <img src="iqmg/twitter.png" />
              &emsp;
              <img src="iqmg/instagram.png" />
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
