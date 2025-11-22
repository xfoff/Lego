import { ThemeProvider } from './Theme';
import App from './App';

const Main = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Main;
