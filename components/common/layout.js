// import Alert from '../components/alert'
import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        {children}
      </div>
      <Footer />
    </>
  );
}
