import Layout from "@/components/Layout";
import Head from "next/head";

export default function Product() {
  return (
    <>
        <Head>
        <title>Produk | NUSAINA GROUP</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
        <Layout>
            <div className="mt-10 container text-center">Produk</div>
        </Layout>
    </>
  )
}
