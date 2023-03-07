import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import { Provider } from "react-redux";
import { store } from "./adapters/store";
import ModalProvider from "./store/2_context";
import UserProvider from "./store/3_context";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
      <ModalProvider>
      <RouterProvider router={router} />
      </ModalProvider>
      </UserProvider>
    </Provider>
  );
}

export default App;
