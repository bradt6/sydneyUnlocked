import React, { useState } from 'react';
import classes from './App.module.css';

import Layout from './components/Layout/Layout';
import EventLoader from './containers/EventLoadout';


function App() {
  const [getEventState, setEventState] = useState({

  });

  return (
      <Layout>
      <div className={classes.App}>
      </div>
      <EventLoader></EventLoader>
    </Layout>
  );
}

export default App;
