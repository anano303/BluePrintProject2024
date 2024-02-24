import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
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
