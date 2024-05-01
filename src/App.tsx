import "./App.css";
import { Tree } from "./components/Tree.tsx";

export function App() {
  return (
      <div className="page">
        <div className="topbar">
          <h2>Business Logo</h2>
        </div>

        <div className="body">
          <div className="sidebar">
            <Tree/>
          </div>

          <div className="content">
            <h1>Body content</h1>
          </div>
        </div>
      </div>
  );
}