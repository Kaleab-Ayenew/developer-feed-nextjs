import style from "../styles/Header.module.css";

function Header(props) {
  return (
    <header className={`${style.header} ${style.sticky}`}>
      <span className={style.title}>Developer Feed</span>
    </header>
  );
}

export default Header;
