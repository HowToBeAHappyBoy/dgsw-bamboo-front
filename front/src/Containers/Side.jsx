import React, { Component } from 'react';
import '../Assets/Side.scss';
import {Link} from 'react-router-dom'


class Side extends Component {
  _home=()=>{
    window.location.href="http://dgswbamboo.oa.to";
  }
  render() {
    return (
    <div>
      <div className="sidebar">
            <div className="logo" onClick={this._home}>
                <p>대소고<br/>대나무숲</p>
            </div>

          <ul>
              {/* <Link to="/post"><a><li><i class="fas fa-heart"></i>&nbsp;&nbsp;감나무 숲</li></a></Link> */}
              <Link to="/post"><a><li><i className="fas fa-comment"></i>&nbsp;&nbsp;제보하기</li></a></Link>
              <Link to="/login"><a><li><i className="fas fa-cog"></i>&nbsp;&nbsp;관리자</li></a></Link>
          </ul>
      </div>
      <div className="topbar">
        <a onClick={this._home}>대소고 대나무숲</a>
        <div className="route">
          <Link to="/post"><a>제보하기</a></Link>&nbsp;&nbsp;
          <Link to="/login"><a>관리자</a></Link>
        </div>
      </div>
    </div>
    );
  }
}

export default Side;