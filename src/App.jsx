import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 pb-6 lg:pb-0 h-full  flex flex-col justify-center items-center overflow-hidden">
      <div className="partial-border p-5 h-full smallBP:h-full lg:h-full">
        <Header />
        <main className="mt-10">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
