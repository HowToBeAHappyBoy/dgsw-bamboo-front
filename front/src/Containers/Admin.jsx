import React, { Component } from 'react';
import '../Assets/User.scss';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import aMain from './aMain';

class Admin extends Component{
    constructor(props){
        super(props);
        this._reject=this._reject.bind(this);
    }
    _allow=()=>{
        const url='http://ec2-13-125-167-78.ap-northeast-2.compute.amazonaws.com/api/admin/allow';
        return axios.post(url,
          {
            id:this.props.num,
            admin:localStorage.getItem('@#@#@#')
          },
          {
          headers:{
            Authorization:localStorage.getItem('@#!!@!@##!@!@!#!@!')
          }
        })
        .then((response)=>{
          if(response.status!==232){
            alert('승인 완료');
          }else if(response.status===232){
            alert('다른 관리자랑 겹쳐보리기');
            this.props.history.push("/admin");
          }else{
            alert('서지녁한테 문의하세요 오류남');
            this.props.history.push("/admin");
          }
        })
        .catch(error=>error);
      }
    _reject(e){
        const url='http://ec2-13-125-167-78.ap-northeast-2.compute.amazonaws.com/api/admin/reject';
        return axios.post(url,
          {
            id:this.props.num,
            admin:localStorage.getItem('@#@#@#')
          },
          {
          headers:{
            Authorization:localStorage.getItem('@#!!@!@##!@!@!#!@!')
          }
        })
        .then(res=>{
          if(res.status!==232){
            alert('거부 완료');
            e.preventDefault();
          }else if(res.status===232){
            alert('다른 관리자랑 겹쳐보리기');
          }else{
            alert('서지녁한테 문의하세요 오류남');
          }
        })
        .catch(err=>console.log(err));
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
                        <div className="button-allow" onClick={this._allow}>
                            <i class="fas fa-check-circle"></i>&nbsp;&nbsp;승인
                        </div>
                        <div className="button-reject" onClick={this._reject}>
                            <i class="fas fa-times"></i>&nbsp;&nbsp;거부
                        </div>
                        <div className="wrapper">
                            {this.props.date} 제보<br/>
                            승인 할 때 한 번 더 생각하기
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin