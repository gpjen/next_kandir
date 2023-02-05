import Header from "../Header";
import Footer from "../Footer";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Header />
        <main style={{  maxWidth:"1700px"}} className="mx-auto" >{children}</main>
      <Footer />
    </>
  );
}
