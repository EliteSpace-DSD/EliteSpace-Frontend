import { Provider } from 'react-redux';
import store from '../stores/store';

function AppProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default AppProvider;
