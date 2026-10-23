export default function KartuProfil({ nama, peran, angkatan, aktif }) {
  return (
    <article className="kartu">
      <h3 className="nama">{nama}</h3>
      <p className="detail">{peran} - angkatan {angkatan}</p>
      {aktif
        ? <span className="badge aktif">Aktif</span>
        : <span className="badge nonaktif">Tidak aktif</span>}
    </article>
  );
}
