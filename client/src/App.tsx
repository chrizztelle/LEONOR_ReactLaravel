import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <RouterProvider router={Routes} />
      <Toaster position="top-right" />
    </>
  );
};

export default App;