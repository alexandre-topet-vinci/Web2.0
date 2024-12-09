import "./Footer.css";

interface FooterProps {
  urlLogo: string;
  children: React.ReactNode;
  theme: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={`footer ${props.theme}`}>
      <div>{props.children}</div>
      <img src={props.urlLogo} alt="logo" className="logo" />
    </footer>
  );
};

export default Footer;
