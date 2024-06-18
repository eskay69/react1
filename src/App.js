import React from 'react'
import { Card } from 'react-bootstrap'
import Name from './Name'
import Description from './Description'
import Price from './Price'
import Image from './Image';

const App = () => {
  const firstName = "Uchenna Hanson"

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Name />
          <Price />
          <Description/>
          <Image />
        </Card.Body>
        </Card>
        <p>Hello, {firstName ? firstName : "there!"}</p>
        {firstName && <img src={`https://avatars.githubusercontent.com/u/105205124?v=4${firstName.toLowerCase()}.jpg`} alt={firstName} />}

    </div>
  );
};

export default App