import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import Navbar from './components/Navbar/Navbar'
import './index.css'
import Jumbotron from './components/Jumbotron/Jumbotron';
import KeyTopics from './components/KeyTopics/KeyTopics';
import InvestorAndBuilderView from './components/businessDescription/InvestorAndBusinessView';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <KeyTopics></KeyTopics>
      <InvestorAndBuilderView></InvestorAndBuilderView>
    </>
  )
}

export default App
