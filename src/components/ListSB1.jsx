export default function ListSB1({ src, title, data}) {
  const test = 'hello'
  return (
    <li>
      <img src={src} alt="Bos Yamaha" />
      <a href={`/isi?key=${data?.key}`}>{title}</a>
    </li>
  );
}
