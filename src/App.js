
import Router from "./routes/route";
import AboutCompo from "./components/userprofile/AboutCompo";
import AllFriendsCompo from "./components/userprofile/AllFriendsCompo";
import AllPhotosCompo from "./components/userprofile/AllPhotosCompo";
import { useState, useEffect } from "react";
function App() {
  const [theme, setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])
  return (
    <div className="App">

      <Router />
      {/* <AboutCompo /> */}
      {/* <AllFriendsCompo /> */}
      {/* <AllPhotosCompo /> */}
    </div>
  );
}

export default App;
