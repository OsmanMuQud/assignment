import Users from "./Users";

const [Active, setActive] = useState(active);

const Header = ({ children }) => {
  return (
    <section>
      {children}
      <div style={{ border: "1px solid black", width: "70%" }}>
        <header>LOGO</header>
        <Users></Users>
      </div>
    </section>
  );
};

export default Header;
