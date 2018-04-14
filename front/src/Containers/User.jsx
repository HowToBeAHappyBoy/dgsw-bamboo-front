import React, { Component } from 'react';
import '../Assets/User.scss';

class User extends Component{
    _goFb=()=>{
        const url="https://www.facebook.com/hashtag/"+"대소고_"+this.props.num+"번째_이야기";
        window.open(url,"_blank");
    }
    render(){
        return(
            <div className="content">
                <div className="card">
                    <div className="card-header">
                        {this.props.num}번째 이야기
                    </div>
                        <div className="card-content">
                        <pre>
                            {this.props.docs}
                        </pre>
                        </div>
                        <div className="card-footer">
                        <div className="button-fb" onClick={this._goFb}>
                            <i className="fab fa-facebook-f"></i>&nbsp;&nbsp;Facebook
                        </div>
                        <div className="wrapper">
                            {this.props.writeDate} 제보<br/>
                            {this.props.allowDate} 승인
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User