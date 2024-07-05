import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <div className="partial-border p-5 ">
          <Header />
          <main className="mt-10">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
