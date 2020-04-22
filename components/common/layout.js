// import Alert from '../components/alert'
import { useState, useRef, useEffect } from "react";

import Header from './header';
import Footer from './footer';
import Meta from './meta';

export default function Layout({ preview, children }) {
  const [ didScroll, setDidScroll ] = useState(false);
  const r = useRef(null);

  useEffect(() => {
    setDidScroll(true);
  }, []);

  return (
    <>
      <Meta/>
      <Header hide={!didScroll}/>
      <div className="min-h-screen" ref={r}>
        {/* <Alert preview={preview} /> */}
        {children}
      </div>
      <Footer />
    </>
  )
}