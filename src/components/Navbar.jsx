export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src="/img/Logo.jpg" alt="Logo" width="50px" />
        <p>BACA REKI</p>
      </div>
      <div className="navigasi">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/AllCategory">ALL Category</a>
            </li>
            <li>
              <a href="/games">Games</a>
            </li>
            <li>
              <a href="/e-sports">E-Sports</a>
            </li>
            <li>
              <a href="/technology">Technology</a>
            </li>
            <li>
              <a href="/console-games">Console Games</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
