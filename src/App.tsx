import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import UserManagement from "./pages/UserManagement";
import SeekAuthorization from "./pages/Article/SeekAuthorization";
import Article6 from "./pages/Article";
import Authorized from "./pages/Article/Authorized";
import "./styles/global.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/article-6" element={<Article6 />}>
              <Route
                path="seek-authorization"
                element={<SeekAuthorization />}
              />
              <Route path="authorized" element={<Authorized />} />
            </Route>
          </Routes>
        </MainLayout>
      </Router>
    </AppProvider>
  );
}

export default App;
