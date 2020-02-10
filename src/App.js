import React, { useState } from 'react';
import classes from './App.module.css';
import Card from './Ui/Card'

import Layout from './components/Layout/Layout';
import EventLoader from './containers/EventLoadout';


function App() {
  const [getEventState, setEventState] = useState({

  });

  return (
      <Layout>
      <div className={classes.App}>
        <h1> hi this is my ract project </h1>
      </div>
      <EventLoader></EventLoader>
    </Layout>
  );
}

export default App;
