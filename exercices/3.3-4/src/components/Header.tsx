import "./Header.css";

interface HeaderProps {
  urlLogo: string;
  children: React.ReactNode;
  theme: string;
}

const Header = (props: HeaderProps) => {
  return (
    <footer className={`header ${props.theme}`}>
      <img src={props.urlLogo} alt="logo" className="logo" />
      <div>{props.children}</div>
    </footer>
  );
};

export default Header;
