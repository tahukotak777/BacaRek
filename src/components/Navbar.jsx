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
              <a href="/business">Business</a>
            </li>
            <li>
              <a href="/sports">Sports</a>
            </li>
            <li>
              <a href="/technology">Technology</a>
            </li>
            <li>
              <a href="/entertainment">Entertainment</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
