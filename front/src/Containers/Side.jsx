import React, { Component } from 'react';
import '../Assets/Side.scss';

class Side extends Component {
  render() {
    return (
    <div>
      <div className="sidebar">
          <div className="logo">
              <p>대소고<br/>대나무숲</p>
          </div>

          <ul>
              <li><i className="fas fa-comment"></i>&nbsp;&nbsp;제보하기</li>
              <li><i className="fas fa-cog"></i>&nbsp;&nbsp;관리자</li>
          </ul>
      </div>
      <div className="topbar">
      대소고 대나무숲
      </div>
    </div>
    );
  }
}

export default Side;