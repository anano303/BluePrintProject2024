import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/navbar/navbar";
import Header from "../Components/header/Header";
export default function Layout({ children }) {
  return (
    <div>

      <Navbar />
      <Header />

      <main>
        <div>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
