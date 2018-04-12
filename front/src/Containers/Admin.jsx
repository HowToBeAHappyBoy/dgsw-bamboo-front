import React, { Component } from 'react';
import '../Assets/User.scss';

class Admin extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div className="content">
                <div className="card">
                        <div className="card-content">
                        <pre>
                            {this.props.docs}
                        </pre>
                        </div>
                        <div className="card-footer">
                        <div className="button-fb">
                            <i className="fab fa-facebook-f"></i>&nbsp;&nbsp;승인
                        </div>
                        <div className="button-fb">
                            <i className="fab fa-facebook-f"></i>&nbsp;&nbsp;거부
                        </div>
                        <div className="wrapper">
                            {this.props.date} 제보<br/>
                            승인 할 떄 한 번 더 생각하기
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin