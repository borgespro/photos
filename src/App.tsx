import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Detail, List, Base } from './screens';

function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route path="" element={<List />} />
        <Route path="photos/:photoId" element={<Detail />} />
        <Route path="*" element={<List />} />
      </Route>
    </Routes>
  );
}

export default App;
