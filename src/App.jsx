import KartuProfil from "./components/KartuProfil.jsx";

function App() {
  const anggota = [
    { nama: "Daus", peran: "Dosen", angkatan: 2024, aktif: false },
    { nama: "Fatkha", peran: "Mahasiswa", angkatan: 2020, aktif: false },
    { nama: "Ardi", peran: "Asisten", angkatan: 2023, aktif: true },
    { nama: "Candra", peran: "Researcher", angkatan: 2020, aktif: false },
  ];

return (
    <div className="container">
      <h1 className="judul">Anggota Tim Tujuh</h1>

      {anggota.map((a) => (
        <KartuProfil
          key={a.nama}
          nama={a.nama}
          peran={a.peran}
          angkatan={a.angkatan}
          aktif={a.aktif}
        />
      ))}
    </div>
  );
}


export default App;