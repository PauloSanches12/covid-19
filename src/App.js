import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import GlobalStyles from './commons/styles/global-styles';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyles />
      <div>Teste</div>
    </StylesProvider>
  );
}

export default App;
