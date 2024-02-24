import Header from "../Components/header/Header";
import Footer from "../Components/Footer";
import NavBar from "../Components/navbar/navbar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar/>
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
