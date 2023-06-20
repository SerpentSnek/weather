// search react developer tools for extension that shows component hierarchy

import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertShown, setAlertVisible] = useState(false);
  // let items = ["ny", "sf", "paris", "london", "tokyo"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }
  // return <div><ListGroup items={items} heading="cities" onSelectItem={handleSelectItem}/></div>
  return (
    <div>
      {alertShown && <Alert onClose={() => setAlertVisible(false)}>alert shown</Alert>}
      <Button onClick={ () => setAlertVisible(true) }>
        yo yo
      </Button>
    </div>
  );
}

export default App;