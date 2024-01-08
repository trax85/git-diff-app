import './App.css';
import CustomDropdown from './Components/CustomDropdown';
import CustomAccordian from './Components/CustomAccordian';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api/';

function App() {
  
  const fetchBranches = async () => {
    try {
      const response = await axios.get(apiUrl + 'getBranches');
      console.log(response.data);
      return response.data.branches;
    } catch (error) {
      console.error('Error fetching options:', error);
      return [];
    }
  };

  return (
    <div className="App">
      
      <CustomDropdown title="First Dropdown" fetchOptions={fetchBranches} />

      <CustomAccordian title="Hello world" description = "This is a sample description"></CustomAccordian>
      <CustomAccordian title="Hello world" description = "This is a sample description"></CustomAccordian>
      <CustomAccordian title="Hello world" description = "This is a sample description"></CustomAccordian>
    </div>
  );
}

export default App;
