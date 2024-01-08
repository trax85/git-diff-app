import Accordion from 'react-bootstrap/Accordion';

function CustomAccordian({ title, description}) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>
            {title}
        </Accordion.Header>
        <Accordion.Body>
            {/* Description */}
            {description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CustomAccordian;