import React, { Component } from 'react';
import '../Assets/User.scss';

class User extends Component{
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
                        <div className="button-fb">
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