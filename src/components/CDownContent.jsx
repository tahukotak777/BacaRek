export default function CDownContent({ data }) {
  return (
    <div class="main-down-content2">
      <img src={data?.thumb} alt={data?.title} />
      <h4>{data?.title}</h4>
      <p>{data?.desc}</p>
    </div>
  );
}
