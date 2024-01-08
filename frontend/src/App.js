import './App.css';
import CustomDropdown from './Components/CustomDropdown';
import CustomAccordian from './Components/CustomAccordian';

function App() {
  const dropdown1Items = ['Action 1', 'Action 2', 'Action 3'];
  const dropdown2Items = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      
      <CustomDropdown title="First Dropdown" items={dropdown1Items} variant="success" />

      {/* Second Custom Dropdown */}
      <CustomDropdown title="Second Dropdown" items={dropdown2Items} variant="primary" />

      <CustomAccordian title="Hello world" description = "This is a sample description"></CustomAccordian>
    </div>
  );
}

export default App;
