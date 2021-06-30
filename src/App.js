/* eslint-disable */
import React, { useState } from 'react'

import './App.css';

function App() {

  let [Title, setTitle] = useState([
    '나른한 몸을 풀어주는 봄 여행지',
    '쨍쨍한 여름, 여기는 어때?',
    '가을 패션을 뽐내보자!'
  ]);
  let [LikeCnt, setLikeCnt] = useState([0, 0, 0]);
  let [isViewModal, setIsViewModal] = useState(false);
  let [titleNum, setTitleNum] = useState(0);
  let [newTitle, setNewTitle] = useState('');
  const handleLikeUp = () => {
    let LikeCntCP = [...LikeCnt];
    LikeCntCP[0]++;
    setLikeCnt(LikeCntCP)
  }

  const handleChangeTitle = () => {
    // 배열 state를 바꿀 땐 반드시 똑같은 배열을 만들어주고 복사본을 수정해주자!
    // 배열 복사하는 방법은                         새로운배열 = [...기존배열]
    // 만약 let alterTitle = Title 이라고 
    let alterTitle = [...Title];
    alterTitle[0] = '연인과 함께 떠나는 겨울 여행지'
    setTitle(alterTitle)
  }
  const handleSortTitle = () => {
    let alterTitle = [...Title];
    alterTitle.sort();
    setTitle(alterTitle);
  }
  const handleViewModal = () => {
    let isViewModalCP = isViewModal;
    setIsViewModal(!isViewModalCP);
  }
  return (
    <div>
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div>
        <button className="sortButton" onClick={handleSortTitle}>제목 정렬</button>
      </div>

      {Title.map(function (element, index) {
        return (
          <div className="list" key={ index }>
            {/* onClick 에는 무조건!!! 함수만 들어갈 수 있다. */}
            <h3 onClick={ handleViewModal }>{(index + 1) + "번 : "} { element } <span onClick={handleLikeUp}>👍</span> {LikeCnt[index]} </h3>
            <button onClick={ () => { setTitleNum(index)} }>제목변경</button>
            <p>2021년 2월 17일 발행</p>
          </div>
        );
      })
      }


      <div>
        <input placeholder="제목" onChange={ (e) => {
          setNewTitle(e.target.value);
        }}></input>
        <button onClick={ (e) => {
          setTitle([newTitle, ...Title])
        } }>발행</button>
      </div>
      {(isViewModal === true) ? <Modal title={Title} titleNum = {titleNum}></Modal> : null}




    </div>
  );
}

// Component 유의사항
// 1. 컴포넌트 첫 글자는 반드시 대문자로 작성
// 2. return() 안에 있는건 태그 하나로 묶어야함
// return(
//   <div>
//   </div>
//   <div>
//   </div>
// );  
// 이거 안됨!
function Modal(props) {
  let [detail, setDetail] = useState('');
  return (
    <div className="modal">
      <h2>{ props.title[props.titleNum] }</h2>
      <p>날짜</p>
      <input onChange={ (e)  => { setDetail(e.target.value) } }  placeholder="상세내용"></input>
      <p>{ detail }</p>
    </div>
  );
}

export default App;
