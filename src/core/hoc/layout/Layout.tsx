import "./Layout.scss";
import { ReactNode } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

interface ChildrenInterface {
  children: ReactNode;
}

export default function Layout({ children }: ChildrenInterface) {
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
