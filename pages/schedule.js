return (
<>
<Head>
    {/* // Required meta tags */}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    {/* // Bootstrap CSS  */}
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" type="text/css" href="history.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Nunito Sans"
      rel="stylesheet"
    />
    <link rel="icon" href="iqmg/icon.svg" type="image" sizes="16x16" />

    <title>Jadwal Konsultasi</title>
  </Head>

  <Body>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="iqmg/logo1.svg" style="width: 145px; height: 42px" />
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
              style="padding-left: 5em"
              >Beranda</a
            >
            <a class="nav-link active" href="#" style="padding-left: 3em"
              >Forum</a
            >
            <a class="nav-link active" href="#" style="padding-left: 3em"
              >Jadwal Konsultasi</a
            >
            <a class="nav-link active" href="#" style="padding-left: 3em"
              >Riwayat</a
            >
            /* <a class="nav-link active" href="#" style="padding-left: 3em;"><img src="img/Notification.png"/></a> */
            <div class="dropdown" style="padding-left: 15em">
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
                style="
                  border-radius: 10px;
                  border: 1px solid #00b0d9;
                  box-sizing: border-box;
                "
              >
                <li>
                  <a class="dropdown-item" href="#" style="color: #586a86"
                    >Notif a</a
                  >
                </li>
                <li><hr class="dropdown-divider" style="color: #00b0d9" /></li>
                <li>
                  <a class="dropdown-item" href="#" style="color: #586a86"
                    >Notif b</a
                  >
                </li>
              </ul>
            </div>
            <a style="padding-left: 3em"
              ><img src="iqmg/userpic.png" style="height: 40px"
            /></a>
            <a
              class="nav-link disabled"
              id="namebar"
              href="#"
              style="padding-left: 2em"
              >Hiken No Ace</a
            >
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
                style="
                  border-radius: 10px;
                  border: 1px solid #00b0d9;
                  box-sizing: border-box;
                "
              >
                <li>
                  <a class="dropdown-item" href="#" style="color: #586a86"
                    >Pelanggan</a
                  >
                </li>
                <li><hr class="dropdown-divider" style="color: #00b0d9" /></li>
                <li>
                  <a class="dropdown-item" href="#" style="color: #586a86"
                    >Konsultan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    // Button
    <div class="container" id="tombol" style="margin-top: 100px">
      <div id="myBtnContainer">
        <center>
          <button class="btn active" onclick="filterSelection('all')">
            Semua
          </button>
          <button class="btn" onclick="filterSelection('sudah')">
            Sudah Dibayar
          </button>
          <button class="btn" onclick="filterSelection('belum')">
            Belum Dibayar
          </button>
          <button class="btn" onclick="filterSelection('batal')">
            Dibatalkan
          </button>
        </center>
      </div>
    </div>
    // EDIT DISINI 
    <div>
      <div class="filterDiv sudah">
        <div class="sched-wrapper">
          <div
            class="container sched-details"
            style="margin-bottom: 20px; margin-top: 20px; height: 321px"
          >
            <div class="first-row" style="display: flex">
              <div class="col-2.5">
                <img
                  src="img/doc1.svg"
                  alt="Foto seorang dokter"
                  class="doct-pict"
                />
              </div>
              <div class="col-8" style="margin-top: 33px">
                <span class="doct-name"
                  >dr. Alfian Jafar, Sp.A<br /><span class="doct-proff"
                    >Dokter Anak</span
                  ></span
                >
              </div>
              <div class="col-2">
                <button class="btn disabled" id="paid">Sudah Dibayar</button>
              </div>
            </div>
            // BAGIAN RISQ 
            <div class="sec-row" style="display: flex">
              <div class="col-3" style="margin-left: 100px">
                <p class="date">
                  <img src="img/Calendar.svg" />&ensp;21 Agustus 2021
                </p>
              </div>
              <div class="col-2" style="margin-left: 100px">
                <p class="time">
                  <img src="img/Time Circle.svg" />&ensp;10:00 AM
                </p>
              </div>
            </div>
            // BAGIAN RISQ 
            <hr class="divider" />
            <div style="margin: 25px 622px 20px 30px">
              <p class="meet-details">Link tatap muka</p>
            </div>
            <div class="grey-container">
              <span class="meet-url">https://meet.google.com/kqn-fxjp-rnd</span>
              <img src="img/copycon.svg" alt="copy icon" class="copycon" />
            </div>
          </div>
        </div>
      </div>
      <div class="filterDiv belum">
        <div class="sched-wrapper">
          <div
            class="container sched-details unpaid-sect"
            style="margin-bottom: 20px; margin-top: 20px"
          >
            <div class="first-row" style="display: flex">
              <div class="col-2.5">
                <img
                  src="img/doc2.svg"
                  alt="Foto seorang dokter"
                  class="doct-pict"
                />
              </div>
              <div class="col-8" style="margin-top: 33px">
                <span class="doct-name"
                  >dr. Amanda Sari, Sp.A<br /><span class="doct-proff"
                    >Dokter Anak</span
                  ></span
                >
              </div>
              <div class="col-2">
                <button class="btn disabled" id="unpaid">Belum Dibayar</button>
              </div>
            </div>
            // BAGIAN RISQ 
            <div class="sec-row" style="display: flex">
              <div class="col-3" style="margin-left: 100px">
                <p class="date">
                  <img src="img/Calendar.svg" />&ensp;21 Agustus 2021
                </p>
              </div>
              <div class="col-2" style="margin-left: 100px">
                <p class="time">
                  <img src="img/Time Circle.svg" />&ensp;10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="filterDiv batal">
        <div class="sched-wrapper">
          <div
            class="container sched-details cancelled-sect"
            style="margin-bottom: 20px; margin-top: 20px"
          >
            <div class="first-row" style="display: flex">
              <div class="col-2.5">
                <img
                  src="img/doc3.svg"
                  alt="Foto seorang dokter"
                  class="doct-pict"
                />
              </div>
              <div class="col-8" style="margin-top: 33px">
                <span class="doct-name"
                  >dr. Muh Harudin, Sp.A<br /><span class="doct-proff"
                    >Dokter Anak</span
                  ></span
                >
              </div>
              <div class="col-2">
                <button class="btn disabled" id="cancelled">Dibatalkan</button>
              </div>
            </div>
            // BAGIAN RISQ 
            <div class="sec-row" style="display: flex">
              <div class="col-3" style="margin-left: 100px">
                <p class="date">
                  <img src="img/Calendar.svg" />&ensp;21 Agustus 2021
                </p>
              </div>
              <div class="col-2" style="margin-left: 100px">
                <p class="time">
                  <img src="img/Time Circle.svg" />&ensp;10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // FOOTER
    <div
      class="row"
      style="
        background-color: #00234e;
        margin-top: 50px;
        margin-bottom: 0px;
        padding-left: 5%;
        padding-right: 5%;
      "
      id="info"
    >
      <div class="column" style="flex: 30%">
        <img src="iqmg/logo2.svg" style="width: 145px; height: 42px" />
        <p style="padding-top: 2em">
          Conby adalah website penyedia <br />jasa layanan konsultasi kesehatan
          anak<br />
          dengan dokter terbaik di Indonesia
        </p>
      </div>
      <div class="column" style="flex: 10%">
        <h2>Navigasi</h2>
        <br />
        <a class="nav-link" href="#">Beranda</a>
        <a class="nav-link" href="#">Cari Dokter</a>
        <a class="nav-link" href="#">Artikel</a>
        <a class="nav-link" href="#">Forum</a>
      </div>
      <div class="column" style="flex: 20%">
        <h2>Hubungi Kami</h2>
        <br />
        <p>
          Gedung Mewah, Jalan Belak-belok No.12, Bojongsoang, Bandung 12230<br />Phone
          : 0290102038<br />E-mail : synergybangoonconby@gmail.com
        </p>
      </div>
    </div>
    <div
      class="row"
      style="
        background-color: #00234e;
        margin-bottom: 0;
        padding-left: 5%;
        padding-right: 5%;
      "
    >
      <div class="container">
        <hr style="color: white" />
      </div>
      <div class="column" style="flex: 75%; margin-top: 0px">
        <p style="font-size: 18px; color: white">
          Copyright © 2021 Conby. All rights reserved
        </p>
      </div>
      <div class="column" style="text-align: right; margin-top: 0px">
        <p style="color: white">
          Ikuti Kami :&emsp;<img src="iqmg/facebook.png" />&emsp;<img
            src="iqmg/twitter.png"
          />&emsp;<img src="iqmg/instagram.png" />
        </p>
      </div>
    </div>
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></Script>
    <Script>
      filterSelection("all");
      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
      }

      // Show filtered elements
      function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
          }
        }
      }

      // Hide elements that are not selected
      function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        element.className = arr1.join(" ");
      }

      // Add active class to the current control button (highlight it)
      var btnContainer = document.getElementById("myBtnContainer");
      var btns = btnContainer.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          var current = btnContainer.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
    </Script>
  </Body>
  </>
)