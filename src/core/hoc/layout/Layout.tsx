import "./Layout.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className={"c-layout"}>
        <Header />
        <main className={"c-layout__content"}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
