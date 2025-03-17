import AppProvider from './Provider';
import AppRouter from './Router';
import AppBarResponsive from './components/AppBarResponsive';
function App() {
  return (
    <AppProvider>
      <AppBarResponsive />
      <AppRouter></AppRouter>
    </AppProvider>
  );
}

export default App;
