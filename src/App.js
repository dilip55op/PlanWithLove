import React, { useState } from "react";
import data from './data.js';
import Tours from './Component/Tours';
import data from './data.js';

const App = () => {
  

  return (
   <div>
        <Tours tours={data}></Tours>
   </div>
  )

};

export default App;
