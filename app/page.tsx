import Header from "./components/Header";
import Sliders from "./components/Sliders";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <main>
        <Header />
        <Sliders />
        <Features />
      </main>
      {/* <footer>
        <div>Footer Content</div>
      </footer> */}
    </div>
  );
}
