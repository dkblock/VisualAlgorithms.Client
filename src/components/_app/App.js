import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../store/actions/account";
import { fetchAlgorithms } from "../../store/actions/algorithm";
import routes from "../../utils/routes";
import AppContent from "./AppContent";
import AppSidebar from "./AppSidebar";

const App = () => {
  const dispatch = useDispatch();
  const currentRoute = useSelector((state) => state.router.location.pathname);
  const { header } = useSelector((state) => state.app);

  const renderHeader = currentRoute !== routes.home && currentRoute !== "/";

  useEffect(() => {
    dispatch(authenticate());
    dispatch(fetchAlgorithms());
  }, [dispatch]);

  return (
    <div className="app">
      <AppSidebar />
      <div className="app__main">
        {renderHeader && (
          <header className="app__page-header bg-light">
            <div className="app__page-header-title">{header}</div>
          </header>
        )}
        <AppContent />
      </div>
    </div>
  );
};

export default App;
