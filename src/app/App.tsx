import AppProvider from "./Provider";
import AppRouter from "./Router";
import PostRequestComponent from "../utils/PostRequestComponent";

function App() {
  return (
    <AppProvider>
      <AppRouter />
      <PostRequestComponent />
    </AppProvider>
  );
}

export default App;
