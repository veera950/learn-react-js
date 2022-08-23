import { Route, Routes } from "react-router-dom";
import AllMeetupspage from "./pages/AllMeetups";
import NewMeetupspage from "./pages/NewMeetups";
import Favoritespage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupspage />} />
        <Route path="new-meetups" element={<NewMeetupspage />} />
        <Route path="favorites" element={<Favoritespage />} />
      </Routes>
    </Layout>
  );
}

export default App;
