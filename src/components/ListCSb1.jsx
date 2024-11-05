export default function ListCSB1({i, data}) {
  return (
    <li>
      <div className="main-sidebar">
        <h3>{`${i+1}.`}</h3>
        <img src={data?.thumb} alt={data?.title} />
        <a href={`/isi?key=${data?.key}`}>{data?.title}</a>
      </div>
    </li>
  );
}
