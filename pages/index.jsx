import Layout from "../components/Layout";
import palmImage  from "../public/bibit-palm.webp"


export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url(${palmImage.src})` }}>
          <h2 className="text-4xl">The First Title</h2>
          <p>Scroll Down</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
          <h2 className="text-4xl">The Second Title</h2>
          <p>Scroll Down</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
          <h2 className="text-4xl">The Third Title</h2>
          <p>Scroll Down</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-pink-700 text-white">
          <h2 className="text-4xl">The Fourth Title</h2>
        </div>
      </div>
    </Layout>
  );
}
