import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import UserManagement from "./pages/UserManagement";
import SeekAuthorization from "./pages/Article/SeekAuthorization";
import Article6 from "./pages/Article";
import Authorized from "./pages/Article/Authorized";
import Compliance from "./pages/Compliance";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Committee from "./pages/Committee";

import "./styles/global.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/article-6" element={<Article6 />}>
              <Route
                path="seek-authorization"
                element={<SeekAuthorization />}
              />
              <Route path="authorized" element={<Authorized />} />
            </Route>
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainLayout>
      </Router>
    </AppProvider>
  );
}

export default App;
