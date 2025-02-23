import AppProvider from "./Provider";
import AppRouter from "./Router";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
