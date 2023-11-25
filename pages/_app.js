import "@/styles/globals.css";
import Navigation from "./navigation/navigation";
import Link from "next/link";
import Footer from "./footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col justify-between  min-h-screen  ">
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
