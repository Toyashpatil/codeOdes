import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import AppNavigator from "./navigation";
import Landing from "./components/Landing/Landing";
import store from "./store/";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Landing />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
