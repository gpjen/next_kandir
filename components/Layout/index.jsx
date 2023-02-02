import Header from "../Header";
import Footer from "../Footer";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Header />
        <main style={{ marginTop: "-30px"}} >{children}</main>
      <Footer />
    </>
  );
}
