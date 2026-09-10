import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Technologies from "./components/Technologies/Technologies"
import type { CardType } from "./types/type";

const dataFetch = async (): Promise<CardType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

const App = () => {
  const [dataPromise] = useState(() => dataFetch());

  return (
    <div>
      <Navbar />

      <Banner />

      <Suspense fallback={<p>Loading...</p>}>
        <Technologies dataPromise={dataPromise} />
      </Suspense>
    </div>
  )
}

export default App