import Accordion from 'react-bootstrap/Accordion';

function Tasks() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>task 1</Accordion.Header>
        <Accordion.Body>
          task 1.1
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>task 2</Accordion.Header>
        <Accordion.Body>
          task 2.1
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>task 3</Accordion.Header>
        <Accordion.Body>
          task 3.1
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>task 4</Accordion.Header>
        <Accordion.Body>
          task 4.1
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>task 5</Accordion.Header>
        <Accordion.Body>
          task 5.1
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );

}

export default Tasks;