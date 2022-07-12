// == Import
import Header from 'src/components/Header';
import Content from 'src/components/Content';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Content />
    <Footer />
  </div>
);

// == Export
export default App;
