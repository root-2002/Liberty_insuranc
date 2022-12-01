import "./App.css";
import { Container } from "./compontents/index";
import { Header, InsuranceDepartments, Footer } from "./section/index";
function App() {
  return (
    <>
      <Header />
      <Container>
        <InsuranceDepartments />
      </Container>
      <Footer />
    </>
  );
}

export default App;
