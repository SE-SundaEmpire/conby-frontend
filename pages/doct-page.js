export default function DoctPage() {
  return (
    <>
      <Head>
        {/* <!-- Required meta tags --> */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        {/* <!-- Bootstrap CSS --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />

        <link rel="stylesheet" type="text/css" href="payment.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito Sans"
          rel="stylesheet"
        />
        <link rel="icon" href="iqmg/icon.svg" type="image" sizes="16x16" />

        <title>Jadwal Praktek</title>
      </Head>

      <>
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          id="mainNav"
        >
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                src="iqmg/logo1.svg"
                style={{ width: "145px", height: "42px" }}
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ paddingLeft: "5em" }}
                >
                  Beranda
                </a>
                <a
                  class="nav-link active"
                  href="#"
                  style={{ paddingLeft: "3em" }}
                >
                  Forum
                </a>

                <div class="dropdown" style={{ paddingLeft: "25em" }}>
                  <button
                    class="btn me-2"
                    type="button"
                    id="dropnotif"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="iqmg/Notification.png" />
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropnotif"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #00b0d9",
                      boxSizing: "border-box",
                    }}
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ color: "#586a86" }}
                      >
                        Notif a
                      </a>
                    </li>
                    <li>
                      <hr
                        class="dropdown-divider"
                        style={{ color: "#00b0d9" }}
                      />
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ color: "#586a86" }}
                      >
                        Notif b
                      </a>
                    </li>
                  </ul>
                </div>
                <a style={{ paddingLeft: "2em" }}>
                  <img src="img/doc1.svg" style={{ height: "40px" }} />
                </a>
                <a
                  class="nav-link disabled"
                  id="namebar"
                  href="#"
                  style={{ paddingLeft: "2em" }}
                >
                  dr. Alfian Jafa...
                </a>
                <div class="dropdown">
                  <button
                    class="btn me-2"
                    type="button"
                    id="dropprof"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="iqmg/dropdown.png" />
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropprof"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #00b0d9",
                      boxSizing: "border-box",
                    }}
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ color: "#586a86" }}
                      >
                        Pelanggan
                      </a>
                    </li>
                    <li>
                      <hr
                        class="dropdown-divider"
                        style={{ color: "#00b0d9" }}
                      />
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        style={{ color: "#586a86" }}
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

        {/* <!-- EDIT DISINI --> */}
        <div class="row checkout" style={{ marginTop: "67px" }}>
          <div class="col-4 adjustment">
            <div class="incomecard">
              <div style={{ display: "flex" }}>
                <img
                  src="img/Wallet.svg"
                  alt="Dompet warna biru"
                  class="wallet"
                />
                <span class="income-desc">Total Pendapatan</span>
              </div>
              <div style={{ display: "flex" }}>
                <p class="Idr" style={{ width: "45px" }}>
                  Rp
                </p>
                <span
                  class="nominal"
                  style={{ marginLeft: "0", width: "131px" }}
                  type="number"
                >
                  1.500.000
                </span>
              </div>
              <div class="withdraw">
                <center>
                  <button class="btn activated" type="submit">
                    Ajukan Pencairan
                  </button>
                </center>
              </div>
            </div>
          </div>

          <div class="col-8 adjustment">
            <div class="container main">
              <p style={{ marginBottom: "30px" }}>Jadwal Konsultasi</p>

              {/* <!-- Button --> */}
              <div
                class="container"
                id="tombol"
                style={{ padding: "0", marginBottom: "50px" }}
              >
                <div id="myBtnContainer">
                  <button class="btn active" style={{ marginRight: "20px" }}>
                    Akan Berlangsung
                  </button>
                  <button class="btn">Selesai</button>
                </div>
              </div>
              {/* <!-- EDIT DISINI --> */}

              <div
                class="container sched-details"
                style={{
                  marginBottom: "30px",
                  marginLeft: "0px",
                  marginRight: "135px",
                  height: "321px",
                }}
              >
                <div class="first-row" style={{ display: "flex" }}>
                  <div class="col-2.5">
                    <img
                      src="img/user1.svg"
                      alt="Foto seorang pengguna"
                      class="doct-pict"
                    />
                  </div>
                  <div class="col-7" style={{ marginTop: "33px" }}>
                    <span
                      class="user-name"
                      style={{ width: "139px", height: "27px" }}
                    >
                      Zara Zubaedah
                      <br />
                      <span class="underlined">Lihat informasi detail</span>
                    </span>
                  </div>
                  <div class="col-2" style={{ paddingLeft: "41px" }}>
                    <button
                      class="btn disabled"
                      id="paid"
                      style={{
                        width: "147px",
                        background: "rgba(9, 74, 169, 0.1)",
                        color: "#022f96",
                      }}
                    >
                      Akan Berlangsung
                    </button>
                  </div>
                </div>
                {/* <!-- BAGIAN RISQ --> */}
                <div class="sec-row" style={{ display: "flex" }}>
                  <div class="col-3" style={{ marginLeft: "100px" }}>
                    <p class="date">
                      <img src="img/Calendar.svg" />
                      &ensp;21 Agustus 2021
                    </p>
                  </div>
                  <div class="col-2" style={{ marginLeft: "100px" }}>
                    <p class="time">
                      <img src="img/Time Circle.svg" />
                      &ensp;10:00 AM
                    </p>
                  </div>
                </div>
                {/* <!-- BAGIAN RISQ --> */}
                <hr class="divider" />
                <div style={{ margin: "25px 622px 20px 30px" }}>
                  <p class="meet-details">Link tatap muka</p>
                </div>
                <div class="grey-container">
                  <span class="meet-url">
                    https://meet.google.com/kqn-fxjp-rnd
                  </span>
                  <img src="img/copycon.svg" alt="copy icon" class="copycon" />
                </div>
              </div>

              <div
                class="container sched-details"
                style={{ margin: "0px 135px 30px 0px; height: 321px" }}
              >
                <div class="first-row" style={{ display: "flex" }}>
                  <div class="col-2.5">
                    <img
                      src="img/user2.svg"
                      alt="Foto seorang pengguna"
                      class="doct-pict"
                    />
                  </div>
                  <div class="col-7" style={{ marginTop: "33px" }}>
                    <span
                      class="user-name"
                      style={{ width: "139px", height: "27px" }}
                    >
                      Clara Rachelia
                      <br />
                      <span class="underlined">Lihat informasi detail</span>
                    </span>
                  </div>
                  <div class="col-2" style={{ paddingLeft: "41px" }}>
                    <button
                      class="btn disabled"
                      id="paid"
                      style={{
                        width: "147px",
                        background: "rgba(9, 74, 169, 0.1)",
                        color: "#022f96",
                      }}
                    >
                      Akan Berlangsung
                    </button>
                  </div>
                </div>
                {/* <!-- BAGIAN RISQ --> */}
                <div class="sec-row" style={{ display: "flex" }}>
                  <div class="col-3" style={{ marginLeft: "100px" }}>
                    <p class="date">
                      <img src="img/Calendar.svg" />
                      &ensp;25 Agustus 2021
                    </p>
                  </div>
                  <div class="col-2" style={{ marginLeft: "100px" }}>
                    <p class="time">
                      <img src="img/Time Circle.svg" />
                      &ensp;14:00 PM
                    </p>
                  </div>
                </div>
                {/* <!-- BAGIAN RISQ --> */}
                <hr class="divider" />
                <div style={{ margin: "25px 622px 20px 30px" }}>
                  <p class="meet-details">Link tatap muka</p>
                </div>
                <div class="grey-container">
                  <span class="meet-url">
                    https://meet.google.com/kqn-fxjp-rnd
                  </span>
                  <img src="img/copycon.svg" alt="copy icon" class="copycon" />
                </div>
              </div>

              <div
                class="container sched-details"
                style={{ margin: "0px 135px 30px 0px", height: "321px" }}
              >
                <div class="first-row" style={{ display: "flex" }}>
                  <div class="col-2.5">
                    <img
                      src="img/user3.svg"
                      alt="Foto seorang pengguna"
                      class="doct-pict"
                    />
                  </div>
                  <div class="col-7" style={{ marginTop: "33px" }}>
                    <span
                      class="user-name"
                      style={{ width: "139px", height: "27px" }}
                    >
                      Sumarti
                      <br />
                      <span class="underlined">Lihat informasi detail</span>
                    </span>
                  </div>
                  <div class="col-2" style={{ paddingLeft: "41px" }}>
                    <button
                      class="btn disabled"
                      id="paid"
                      style={{
                        width: "147px",
                        background: "rgba(9, 74, 169, 0.1)",
                        color: "#022f96",
                      }}
                    >
                      Akan Berlangsung
                    </button>
                  </div>
                </div>
                {/* <!-- BAGIAN RISQ --> */}
                <div class="sec-row" style={{ display: "flex" }}>
                  <div class="col-3" style={{ marginLeft: "100px" }}>
                    <p class="date">
                      <img src="img/Calendar.svg" />
                      &ensp;30 Agustus 2021
                    </p>
                  </div>
                  <div class="col-2" style={{ marginLeft: "100px" }}>
                    <p class="time">
                      <img src="img/Time Circle.svg" />
                      &ensp;10:00 AM
                    </p>
                  </div>
                </div>
                {/* <!-- BAGIAN RISQ --> */}
                <hr class="divider" />
                <div style={{ margin: "25px 622px 20px 30px" }}>
                  <p class="meet-details">Link tatap muka</p>
                </div>
                <div class="grey-container">
                  <span class="meet-url">
                    https://meet.google.com/kqn-fxjp-rnd
                  </span>
                  <img src="img/copycon.svg" alt="copy icon" class="copycon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- FOOTER --> */}
        <div
          class="row"
          style={{
            backgroundColor: "#00234e",
            marginBottom: "0px",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
          id="info"
        >
          <div class="column" style={{ flex: "30%" }}>
            <img
              src="iqmg/logo2.svg"
              style={{ width: "145px", height: "42px" }}
            />
            <p style={{ paddingTop: "2em" }}>
              Conby adalah website penyedia <br />
              jasa layanan konsultasi kesehatan anak
              <br />
              dengan dokter terbaik di Indonesia
            </p>
          </div>
          <div class="column" style={{ flex: "20%" }}>
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
          class="row"
          style={{
            backgroundColor: "#00234e",
            marginBottom: "0",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <div class="container">
            <hr style={{ color: "white" }} />
          </div>
          <div class="column" style={{ flex: "75%", marginTop: "0px" }}>
            <p style={{ fontSize: "18px", color: "white" }}>
              Copyright © 2021 Conby. All rights reserved
            </p>
          </div>
          <div class="column" style={{ textAlign: "right", marginTop: "0px" }}>
            <p style={{ color: "white" }}>
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
          crossorigin="anonymous"
        ></script>
        <script src="/public/doct-page2.js"></script>
      </>
    </>
  );
}
