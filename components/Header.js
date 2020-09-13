import Link from "next/link";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/ocurrences">
            <a>Ocorrências</a>
          </Link>
        </li>
        <li>
          <Link href="/ocurrenceTypes">
            <a>Tipos de ocorrências</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
