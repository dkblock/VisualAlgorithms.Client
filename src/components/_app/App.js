import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../store/actions/account";
import { fetchAlgorithms } from "../../store/actions/algorithm";
import AppContent from "./AppContent";
import AppSidebar from "./AppSidebar";

const App = () => {
  const dispatch = useDispatch();
  const { header } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(authenticate());
    dispatch(fetchAlgorithms());
  }, [dispatch]);

  return (
    <div className="app">
      <AppSidebar />
      <div className="app__main">
        <header className="app__page-header bg-light">
          <div className="app__page-header-title">{header}</div>
        </header>
        <AppContent />
      </div>
    </div>
  );
};

export default App;