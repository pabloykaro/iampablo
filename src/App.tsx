import { Header } from "./components/Header";
import { Slide } from "./components/Slide";
import { Routes } from "./routes";

export function App(){
  return(
    <main className="w-screen h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl my-3">
        <Header/>
        <Slide/>
        <Routes/>
      </div>
    </main>
  );
}