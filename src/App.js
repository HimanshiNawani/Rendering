import React, { useState} from "react";

import Comp from './Comp';
export default function App() {
  const [flag, setFlag] =useState(true);
  return (
    <>

    <button onClick ={() => setFlag(!flag)}> Switch</button>
    {flag && <Comp/>}
    </>
  );
}
