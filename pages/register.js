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
                  aria-labelledby="SyaratKetentuan"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title snk" id="SyaratKetentuan">
                          Syarat dan Ketentuan
                        </h5>
                        <button
                          type="button"
                          className="close btn"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      {/* to be inserted here */}
                      <div className="modal-body">
                        <p>Syarat dan Ketentuan Penggunaan Aplikasi</p>
                        <ol>
                          <li>
                            Aplikasi Conby hanya digunakan untuk menggunakan
                            layanan yang tersedia.
                          </li>
                          <li>
                            Aplikasi Conby tidak boleh disalahgunakan untuk
                            menipu, merugikan, dan/atau menimbulkan
                            ketidaknyamanan kepada pihak lain.
                          </li>
                          <li>
                            Jika pengguna terbukti menggunakan website untuk
                            tujuan yang membahayakan, merugikan, atau di luar
                            tujuan penggunaan yang dimaksud aplikasi ini, maka
                            Conby berhak melarang pengguna untuk menggunakan
                            website Conby.
                          </li>
                          <li>
                            Pengguna wajib menjaga kerahasiaan informasi yang
                            didapatkan di website Conby dan tidak
                            menyalahgunakannya untuk tujuan yang merugikan pihak
                            lain.
                          </li>
                          <li>
                            Pengguna dihimbau untuk tidak melakukan segala
                            bentuk tindakan yang merugikan atau menimbulkan
                            ketidaknyamanan.
                          </li>
                          <li>
                            Pengguna dilarang menggunakan informasi/ program/
                            fitur yang terdapat di situs dan website Conby untuk
                            melanggar peraturan perundang-undangan yang berlaku
                            di Indonesia.
                          </li>
                          <li>
                            Pengguna bertanggung jawab penuh atas akun Conby
                            miliknya dan dapat dimintai pertanggungjawaban jika
                            sewaktu-waktu terjadi kerugian yang disebabkan oleh
                            akunnya, meskipun akun tersebut disalahgunakan oleh
                            pihak lain.
                          </li>
                          <li>
                            Jika akun pengguna diretas atau dicuri sehingga
                            pengguna kehilangan kontrol atas akunnya, maka
                            pengguna wajib memberitahu Conby sesegera mungkin
                            agar kami dapat menonaktifkan akun pengguna dan
                            melakukan tindak pencegahan lainnya.
                          </li>
                          <li>
                            Conby berhak membatalkan segala transaksi yang
                            mencurigakan atau tidak sesuai dengan syarat dan
                            ketentuan yang berlaku.
                          </li>
                        </ol>

                        <p>Perizinan</p>
                        <ol>
                          <li>
                            Conby memberikan izin kepada pengguna untuk
                            menggunakan website Conby. Izin ini bersifat
                            terbatas, tidak eksklusif, tidak dapat
                            dipindahtangankan dan dialihkan, serta dapat ditarik
                            sewaktu-waktu.
                          </li>
                          <li>Pengguna tidak diperkenankan untuk:</li>

                          {/* <!-- nested point --> */}
                          <ul>
                            <li>
                              Menyalin, mengubah, mengalihkan, mengadaptasi,
                              bagian mana pun, atau melakukan cara apa pun yang
                              dapat mengeksploitasi website Conby, kecuali
                              sebagaimana yang diperbolehkan dalam Syarat &
                              Ketentuan Penggunaan Website.
                            </li>
                            <li>
                              Meluncurkan program otomatis atau skrip termasuk,
                              namun tidak terbatas pada, web spiders, web
                              crawlers, web robots, web ants, web indexers,
                              bots, virus atau worm, atau program apapun yang
                              mungkin membuat beberapa permintaan server per
                              detik atau menciptakan beban berat atau menghambat
                              operasi dan/atau kinerja website Conby.
                            </li>
                            <li>
                              Menggunakan robot, spider, pencarian
                              situs/aplikasi pengambilan kembali, atau perangkat
                              manual atau otomatis lainnya atau proses untuk
                              mengambil, indeks, “tambang data” (data mine),
                              atau dengan cara apapun memperbanyak atau
                              menghindari struktur navigasi atau presentasi dari
                              website atau isinya.
                            </li>
                          </ul>
                          {/* <!-- divider --> */}

                          <li>Pengguna tidak akan:</li>
                          {/* <!-- nested points --> */}
                          <ul>
                            <li>
                              Mengirim spam atau pesan yang bersifat duplikasi
                              atau melanggar hukum yang berlaku.
                            </li>
                            <li>
                              Mengirim atau menyimpan materi yang bernada
                              mengancam, memfitnah, atau melanggar hukum, dan
                              bersifat sadis, termasuk namun tidak terbatas pada
                              bahan berbahaya bagi anak-anak atau yang melanggar
                              hak privasi pihak ketiga.
                            </li>
                            <li>
                              Mengirim bahan yang mengandung virus piranti
                              lunak, worm, trojan horses atau kode komputer
                              berbahaya lainnya, dokumen/file, script, agen,
                              atau program.
                            </li>
                            <li>
                              Mengganggu atau mengacaukan integritas atau
                              kinerja aplikasi Conby atau data di dalamnya.
                            </li>
                            <li>
                              Mencoba untuk mendapatkan akses yang tidak sah ke
                              website atau sistem atau jaringan terkait.
                            </li>
                            <li>
                              Terlibat dalam tindakan yang mungkin bisa merusak
                              reputasi kami atau dianggap dapat merusak reputasi
                              Conby.
                            </li>
                          </ul>
                          <li>
                            Conby memiliki hak untuk menyelidiki dan menuntut
                            setiap pelanggaran di atas sepanjang yang
                            dimungkinkan oleh hukum. Conby dapat melibatkan dan
                            bekerja sama dengan pihak penegak hukum dalam
                            menuntut pengguna yang melanggar Syarat & Ketentuan
                            Penggunaan Website ini.
                          </li>
                        </ol>

                        <p>Hak-hak Pengguna</p>
                        <ol>
                          <li>
                            Pengguna berhak mengakses semua informasi tentang
                            akun pengguna, termasuk data pribadi dan data bayi.
                          </li>
                          <li>
                            Pengguna berhak mengubah beberapa informasi pribadi
                            akunnya dengan ketentuan bahwa informasi-informasi
                            tersebut hanya dapat diubah jika pengguna memberikan
                            bukti yang dapat meyakini Conby bahwa penggantian
                            tersebut adalah benar dan sah, serta hanya berlaku
                            dengan kesepakatan tertulis dari Conby. Conby tidak
                            bertanggung jawab atas segala risiko yang terjadi
                            akibat perubahan informasi tersebut.
                          </li>
                          <li>
                            Pengguna berhak untuk mendapatkan layanan penggunaan
                            situs.
                          </li>
                        </ol>

                        <p>Kewajiban Pengguna</p>
                        <ol>
                          <li>
                            Pengguna wajib membaca, memahami, serta tunduk pada
                            Syarat dan Ketentuan ini.
                          </li>
                          <li>
                            Pengguna wajib memberikan informasi dengan benar dan
                            melakukan pembaruan data yang berkaitan dengan
                            informasinya.
                          </li>
                          <li>
                            Pengguna wajib menjaga keamanan akun keanggotaannya
                            sehingga akun pengguna tidak digunakan untuk
                            melanggar hukum yang berlaku. Pengguna wajib
                            bertanggung jawab untuk menjaga kerahasiaan PIN yang
                            digunakan. Segala kerugian yang timbul akibat
                            kelalaian pengguna dalam menjaga keamanan PIN akan
                            menjadi tanggung jawab pengguna.
                          </li>
                          <li>
                            Pengguna tidak boleh mengubah atau memanipulasi data
                            Conby dengan melakukan pemanfaatan celah keamanan
                            atau berkomplot dengan bagian internal sehingga
                            menimbulkan kerugian untuk Conby.
                          </li>
                        </ol>

                        <p>Pelanggaran terhadap Syarat & Ketentuan</p>
                        <li className="description">
                          Jika pengguna melanggar ketentuan yang terdapat pada
                          Syarat & Ketentuan Penggunaan Website
                        </li>
                        <ol>
                          <li>
                            Conby berhak membatalkan atau menangguhkan transaksi
                            pengguna secara sepihak. Saldo akan dikembalikan ke
                            pengguna setelah memperhitungkan biaya kerugian dan
                            biaya lainnya.
                          </li>
                          <li>
                            Conby berhak membatalkan perjanjian yang dilakukan
                            Conby dan pengguna yang berhubungan dengan
                            transaksi.
                          </li>
                        </ol>

                        <p>Hak-hak Conby</p>
                        <ol>
                          <li>
                            Conby berhak meminta keterangan lain sebagai bagian
                            proses verifikasi melalui email, telepon, ataupun
                            melalui media lainnya kepada pengguna.
                          </li>
                          <li>
                            Conby berhak untuk menyimpan dan mempergunakan semua
                            data yang diberikan oleh pengguna.
                          </li>
                          <li>
                            Conby dapat menonaktifkan akun pengguna kapan pun
                            dengan alasan apa pun terutama penyalahgunaan
                            sistem, tindak kriminal, peretasan keamanan situs,
                            atau hal-hal lain yang melanggar Syarat dan
                            Ketentuan yang ditetapkan oleh Conby.
                          </li>
                          <li>
                            Conby berhak melakukan verifikasi atas keaslian dan
                            keabsahan data pengguna dan sumber dana yang
                            digunakan pengguna untuk melakukan transaksi.
                          </li>
                        </ol>

                        <p>Kewajiban Conby</p>
                        <ol>
                          <li>
                            Conby bertanggung jawab atas setiap transaksi dan
                            telah tercatat dalam sistem elektronik maupun
                            pembukuan yang dilakukan secara tertulis.
                          </li>
                          <li>
                            Conby wajib menyimpan catatan yang benar berkaitan
                            dengan transaksi pengguna. Pengguna dan Conby dengan
                            ini menyetujui bahwa catatan yang dilakukan oleh
                            Conby (termasuk pembukuan manual).
                          </li>
                          <li>
                            Conby wajib mengumumkan pada situs bahwa semua
                            informasi berkaitan dengan perubahan
                            ketentuan-ketentuan keanggotaan di situs ini.
                          </li>
                          <li>
                            Conby bertanggung jawab atas setiap jumlah transaksi
                            yang telah tercatat di sistem Conby.
                          </li>
                        </ol>
                      </div>
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
