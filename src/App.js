import "./Assets/Styles/App.css";
import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";

export default function App() {
    return (
        // BEM convention
        <div className="app">
            {/* Components */}
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    );
}
