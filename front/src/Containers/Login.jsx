import React, { Component } from 'react';
import '../Assets/User.scss';
import axios from 'axios'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            pw:""
        }
        this.idChange=this.idChange.bind(this);
        this.pwChange=this.pwChange.bind(this);
    }
    idChange(e){
        this.setState({...this.state,id: e.target.value});
    }
    pwChange(e){
        this.setState({...this.state,pw: e.target.value});
    }
    onSubmit(e){
        let url='http://ec2-13-125-167-78.ap-northeast-2.compute.amazonaws.com/api/cert/signin';
        return axios.post(url,this.state)
        .then((res)=>{
        if(res.status===200){
            localStorage.setItem("@#!!@!@##!@!@!#!@!",res.data.token);
            localStorage.setItem("@#@#@#",res.data.admin);
            alert('로그인 성공');
            this.props.history.push("/admin");
        }
        })
        .catch(err=>alert('관리자 하고 싶어요?'));
    }
    enterkey=(event)=>{
        let charCode = (typeof event.which == "undefined") ? event.keyCode : event.which;
        if(charCode===13){
            this.onSubmit();
        }
    }
    render(){
        return(
            <div className="main">
                <div className="content">
                    <div className="card">
                        <div className="card-header">
                            관리자 로그인
                        </div>
                        <div className="card-content" onKeyPress={this.enterkey}>
                            <input type="text" placeholder="아이디" value={this.state.id} onChange={this.idChange}/>
                            <input type="password" placeholder="비밀 번호" value={this.state.pw} onChange={this.pwChange}/>
                        </div>
                        <div className="card-footer">
                            <div className="button-login" onClick={this.onSubmit}>
                                <i class="fas fa-unlock"></i>&nbsp;&nbsp;로그인
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login