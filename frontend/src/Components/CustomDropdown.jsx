// CustomDropdown.js
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomDropdown = ({ fetchOptions, onSelect, variant, placeholder}) => {
  const [options, setOptions] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    // Fetch options from the provided function
    fetchOptions()
      .then(response => {
        // Extract list from the response
        const items = response || [];
        setOptions(items);
        console.log(items)
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  }, [fetchOptions]);

  const handleSelect = (item) => {
    setSelectedItem(item);
    // Call the onSelect callback if provided
    if (onSelect) {
      onSelect(item);
    }
  };
  return (
    <Dropdown onSelect={(eventKey) => handleSelect(eventKey)}>
      <Dropdown.Toggle variant={variant} id="dropdown-basic">
        {selectedItem || 'Select an item'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((item) => (
          <Dropdown.Item key={item} eventKey={item}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;