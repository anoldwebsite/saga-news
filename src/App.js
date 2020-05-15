import React from 'react';
import Button from './components/Button';
import Loading from './components/utilities/loading';
import News from './components/news/news.component';

function App() {
  return (
    <div>
      <Button />
      <Loading />
      <News />
    </div>
  );
}

export default App;
