export default function Content2({img, title}) {
  return (
    <div className="main-down-content">
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}
