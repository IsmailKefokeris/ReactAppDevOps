import "../styles/globals.css";
import Header from "../components/Header";


function MyApp({ Component, pageProps }) {
    return (
        <div className=" bg-slate-300 min-h-screen w-screen overflow-x-hidden">
            <Header />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
