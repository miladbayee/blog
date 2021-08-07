import "./layout.css";

import Header from "../components/Header";
import Routes from "../components/Routes";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
