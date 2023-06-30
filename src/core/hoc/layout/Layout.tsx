import "./Layout.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ReactNode } from "react";

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
