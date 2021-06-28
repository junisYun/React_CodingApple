import React, { useState } from 'react'

import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트", "강남 우동 맛집"]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] } {글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
