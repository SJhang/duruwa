// import Alert from '../components/alert'
import Header from "./header";
import Menubar from "./menubar";
import CoverImage from "../Intro/CoverImage";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Menubar/>
      <Header />
      <CoverImage src={"/assets/images/cafe.png"}/>
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        {children}
      </div>
      <Footer />
    </>
  );
}
