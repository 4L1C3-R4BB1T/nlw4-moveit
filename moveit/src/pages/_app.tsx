import { LoginProvider } from "../contexts/LoginContext";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
    return (
        <LoginProvider>
            <Component {...pageProps} />
        </LoginProvider>
    );
}

export default MyApp;
