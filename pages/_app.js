import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className=" bg-slate-300 min-h-screen">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
