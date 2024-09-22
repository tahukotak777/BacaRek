export default function ListSB2({i, title, href}) {
  return (
    <li>
      <h1>{`${i+1}.`}</h1>
      <a href={href}>{title}</a>
    </li>
  );
}
