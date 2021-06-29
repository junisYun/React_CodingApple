/* eslint-disable */
import React, { useState } from 'react'

import './App.css';

function App() {

  let [Title, setTitle] = useState([
    '나른한 몸을 풀어주는 봄 여행지',
    '쨍쨍한 여름, 여기는 어때?',
    '가을 패션을 뽐내보자!'
  ]);
  let [LikeCnt, setLikeCnt] = useState(0);
  const handleLikeUp = () => {
    setLikeCnt(LikeCnt++);
  }

  const handleChangeTitle = () => {
    // 배열 state를 바꿀 땐 반드시 똑같은 배열을 만들어주고 복사본을 수정해주자!
    // 배열 복사하는 방법은                         새로운배열 = [...기존배열]
    // 만약 let alterTitle = Title 이라고 
    let alterTitle = [...Title];
    alterTitle[0] = '연인과 함께 떠나는 겨울 여행지'
    setTitle(alterTitle)
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        {/* onClick 에는 무조건!!! 함수만 들어갈 수 있다. */}
        <h3>{Title[0]} <span onClick={() => { handleLikeUp }}>👍</span> {LikeCnt} </h3>
        <button onClick={ handleChangeTitle }>제목변경</button>
        <p>2021년 2월 17일 발행</p>
      </div>

      <div className="list">
        {/* onClick 에는 무조건!!! 함수만 들어갈 수 있다. */}
        <h3>{Title[1]}</h3>
        <p>2021년 4월 20일 발행</p>
      </div>


      <div className="list">
        <h3>{Title[2]}</h3>
        <p>2021년 6월 29일 발행</p>
      </div>
    </div>
  );
}

export default App;
