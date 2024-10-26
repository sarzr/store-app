import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { Home } from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "./components/errorBoundary";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={reduxStore}>
          <RouterProvider router={router}></RouterProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;