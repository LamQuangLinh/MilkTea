import { Route, Routes } from "react-router-dom";
import { routes } from "./router";
import MainLayout from "./layout/mainlayout";

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ path, page: Page }) => (
          <Route
            key={path}
            path={path}
            element={
              <MainLayout>
                <Page />
              </MainLayout>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
