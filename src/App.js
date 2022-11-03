import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./Mail";
import Emaillist from "./Emaillist";
import "./App.css";
import { store } from "./app/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import SendMail from "./SendMail";
import { selectMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app">
            <Header />

            <div className="app__body">
              <Sidebar />

              <Routes>
                <Route path="/mail" element={<Mail />} />

                <Route path="/" element={<Emaillist />} />
              </Routes>
            </div>
            {sendMessageIsOpen && <SendMail />}
          </div>
        )}
      </Router>
    </Provider>
  );
}

export default App;
