import Link from "next/link"

const Header = () => {
  return (
    <>
      <Link href="/">
        <a>
          <div className="logo">
            <img className="setDark" src="/assets/blog/logo/logo.png" alt="LAMF5" width={50} height={50}/>
            <h2>LAMF5</h2>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Header;
