import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Head>
        {/* <title> {props.title} | Nusaina Group </title> */}
        <link rel="icon" href="/logo.webp" />
        <meta
          name="description"
          content="pt.nusaina group merupakan perusahaan kebun kelapa sawit terbesar di Maluku. menerapkan sistem pengolahan moderen dan sistem drainase yang ramah lingkungan. memiliki visi dan misi mulia membangun negeri perduli terhadap lingkungan hidup dan sosial masyarakat"
        />
        <meta name="author" content="gpjen & ar" />
        <meta
          name="keyword"
          content="kelapa sawit, seram, maluku tengah, moderen, kernel, minyak nabati"
        />
      </Head>
      <Header />
      <main style={{ marginTop: "-30px" }}>{children}</main>
      <Footer />
    </>
  );
}
