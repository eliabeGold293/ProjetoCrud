import GlobalStyle from "./styles/global.js"; // importando minha estilização global
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Form from "./componentes/form.js";
import Grid from "./componentes/grid.js";

const Container = styled.div`
 width:100%;
 max-width: 800px;
 margin-top: 20px;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px
`;

const Title = styled.h2``;

function App() {
  return (
    <>

    <Container>
      <Title>Usuários</Title>
      <Form/>
      <Grid/>
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
    <GlobalStyle/>

    </>
  
  );
}
export default App;
