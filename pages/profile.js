import Head from "next/head";
import { useEffect, useState } from "react";

export default function Profile() {
  useEffect(() => {
    if (window.localStorage.getItem("accessToken") === null) {
      window.location = "/login";
    }
  });

  const [profileData, setProfileData] = useState({});

  useEffect(async () => {
    const accessToken = window.localStorage.getItem("accessToken");
    const userId = window.localStorage.getItem("userId");

    const url = "https://conby-backend.herokuapp.com/users/profile/" + userId;
    const opt = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": accessToken,
      },
    };

    try {
      const res = await fetch(url, opt);
      const json = await res.json();

      if (json.status === 200) {
        setProfileData(json.data);
      } else {
        // do something
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const [submitable, setSubmitable] = useState(false);

  function handleFormChange(event) {
    event.preventDefault();

    const form = document.querySelector(".update-user-form");

    let submitable = true;
    let radioChecked = false;

    form.querySelectorAll('input:not([type="submit"])').forEach((elm) => {
      if (elm.type === "text" || elm.type === "date" || elm.type === "number") {
        submitable = submitable && elm.value.length > 0;
      } else if (elm.type === "radio") {
        if (!radioChecked) {
          radioChecked = elm.checked;
          submitable = submitable && elm.checked;
        }
      }
    });

    setSubmitable(submitable);
  }

  async function handleUpdateUser(event) {
    event.preventDefault();

    const form = event.target;
    let formData = new FormData(form);

    const accessToken = window.localStorage.getItem("accessToken");
    const userId = window.localStorage.getItem("userId");

    const url =
      "https://conby-backend.herokuapp.com/users/update-profile/" + userId;
    const opt = {
      method: "PUT",
      mode: "cors",
      headers: {
        "X-Access-Token": accessToken,
      },
      body: formData,
    };

    try {
      const res = await fetch(url, opt);
      const json = await res.json();

      if (json.status === 200) {
        alert("update sukses!");
      } else {
        // do something
      }

      console.log(json);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="img/iconby.png" type="image" sizes="16x16" />
        <link href="credentials.css" rel="stylesheet" />
        <script src="/user-profile.js"></script>
        <title>Profile</title>
      </Head>
      <>
        <div className="row">
          <div className="col-6" id="main">
            <div className="container">
              <img src="img/conby-login.png" id="logo1" alt="logo conby" />
              <h1 className="main-profile">Harap Lengkapi data berikut!</h1>
              {/* // BAGIAN RISQ */}
              <div className="row" id="uploadpic">
                <div className="col-3">
                  <img src="img/select-pict.png" />
                </div>
                <div className="col-4">
                  <button className="btn btn-outline-info">
                    Unggah Foto Profil
                  </button>
                </div>
                <div className="col-3 spacing">
                  <button
                    className="btn btn-outline-secondary"
                    style={{ width: "108px" }}
                  >
                    Hapus
                  </button>
                </div>
              </div>
              {/* // BAGIAN RISQ */}
              <form>
                <div className="label-profile">
                  Nama<span className="required">*</span>
                </div>
                <input
                  type="text"
                  name="nama"
                  placeholder="masukkan nama anda"
                />
              </form>
              <div className="row">
                {/* // border and div detail */}
                <div className="col" id="hr-profile">
                  <hr />
                </div>
              </div>
              <h1 className="new-sect">Informasi Anak</h1>
              <form
                className="update-user-form"
                method="POST"
                action="/profile"
                onChange={handleFormChange}
                onSubmit={handleUpdateUser}
              >
                <div className="label">
                  Nama Anak<span className="required">*</span>
                </div>
                <input
                  type="text"
                  name="babyName"
                  placeholder="masukkan nama anak anda"
                />
                <div className="label">
                  Tanggal Lahir<span className="required">*</span>
                </div>
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="dd/mm/yyyy"
                />
                <div className="label">
                  Jenis Kelamin<span className="required">*</span>
                </div>
                {/* // BREAK : RISQ */}
                <div className="row" id="gender">
                  {/* // MINTA LOGO WARNA PUTIH */}
                  <div className="col-6">
                    <input
                      type="radio"
                      className="btn-check"
                      name="gender" //options-outlined
                      id="inlined1"
                      autoComplete="off"
                      checked
                    />
                    <label
                      className="btn btn-outline size"
                      htmlFor="inlined1"
                      onMouseOver="hover(this,'img/malewhite.png','logo-gender1');"
                      onMouseOut="unhover(this,'img/male.png','logo-gender1');"
                    >
                      <img src="img/male.png" id="logo-gender1" />
                      Laki - Laki
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      type="radio"
                      className="btn-check"
                      name="gender" //options-outlined
                      id="outlined2"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline female"
                      htmlFor="outlined2"
                      onMouseOver="hover(this,'img/femalewhite.png','logo-gender2');"
                      onMouseOut="unhover(this,'img/female.png','logo-gender2');"
                    >
                      <img src="img/female.png" id="logo-gender2" />
                      Perempuan
                    </label>
                  </div>
                </div>
                {/* // BREAK : RISQ */}
                <div className="label">
                  Tinggi Badan<span className="required">*</span>
                </div>
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    name="height"
                    className="form-control position"
                    placeholder="masukkan tinggi badan anak anda (00.00)"
                    aria-describedby="addon-wrapping"
                  />
                  <span className="input-group-text unit" id="addon-wrapping">
                    cm
                  </span>
                </div>
                <div className="label">
                  Berat Badan<span className="required">*</span>
                </div>
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    name="weight"
                    className="form-control position"
                    placeholder="masukkan berat badan anak anda (00.00)"
                    aria-describedby="addon-wrapping"
                  />
                  <span className="input-group-text unit" id="addon-wrapping">
                    kg
                  </span>
                </div>
                <button
                  className="btn button-outline submit-profile"
                  type="submit"
                  value="submit"
                  disabled={submitable ? false : true}
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
          {/* //IMAGE POSITIONING */}
          <div className="col-6" id="right-illus">
            <img src="img/doct-illus.png" alt="Foto seorang dokter" />
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
