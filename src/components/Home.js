import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import {Box} from '@chakra-ui/react'

function App() {
  return (
    <>
      <Box className='content'>
        <Navbar />
        <Main />
      </Box>
      <Footer />
    </>
  );
}

export default App;
