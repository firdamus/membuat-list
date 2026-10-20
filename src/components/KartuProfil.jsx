export default function KartuProfil({ nama, peran, tahun, aktif }) {
  return (
    <article className="kartu">
      <h3>{nama}</h3>
      <p>{peran} - angkatan {tahun}</p>
      {aktif
        ? <span className="lencana">Aktif</span>
        : <span className="lencana off">Tidak aktif</span>}
    </article>
  );
}
