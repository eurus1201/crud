import { Grid } from "@mui/material";
import BaisTable from "./components";
import logoaseron from './logoaseron.svg';

function App() {

  return (<>
    <Grid justifyContent='center' flexDirection={'column'} display={'flex'} xs>
      <Grid item xs={12} justifyContent='center' textAlign={'center'} marginTop="20px" marginBottom={'20px'}>
        <img src={logoaseron} className="App-logo" alt="logo" />
      </Grid>
      <Grid item xs={12}>
        <BaisTable />
      </Grid>
    </Grid>
  </>);
}

export default App;
