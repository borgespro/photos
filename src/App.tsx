import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Detail, List } from './screens';

function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/about" element={<Detail />} />
    </Routes>
  );
}

export default App;
