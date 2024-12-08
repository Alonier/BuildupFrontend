import LayoutUI from "/src/layout/LayoutPresenter";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutUI>
      <Component {...pageProps}/>
    </LayoutUI>
  );
}
