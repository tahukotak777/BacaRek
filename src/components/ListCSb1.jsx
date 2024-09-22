export default function ListCSB1({i, data}) {
  return (
    <li>
      <div className="main-sidebar">
        <h3>{`${i+1}.`}</h3>
        <img src={data?.thumb} alt={data?.title} />
        <a href="#">{data?.title}</a>
      </div>
    </li>
  );
}
