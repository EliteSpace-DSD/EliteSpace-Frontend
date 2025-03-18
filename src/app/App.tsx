import AppProvider from './Provider';
import AppRouter from './Router';

function App() {
  return (
    <AppProvider>
      <AppRouter></AppRouter>
    </AppProvider>
  );
}

export default App;
