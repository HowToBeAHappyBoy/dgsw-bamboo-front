import React, { Component } from 'react';
import '../Assets/Post.scss';
import axios from 'axios';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {value : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        if(this.state.value===''){
          alert('좀 아니다 야');
          e.preventDefault();
        }else{
        axios.post('http://ec2-13-125-167-78.ap-northeast-2.compute.amazonaws.com/api/user/post',{desc:this.state.value})
        .then(response=>{
          if(response.status==201){
            alert('제보 성공\n제보된 글은 관리자의 승인 후 게시됩니다');
            this.props.history.push("/");
            e.preventDefault();
          }else{
            alert('모야 외않되');
            e.preventDefault();
          }
          return response;
          })
        .catch(response=>{console.log(response);});
        e.preventDefault();
        }
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        return(
            <div className="mainpost">
                <div className="contents">
                    <div className="post">
                        <div className="post-header">
                            제보하기
                        </div>
                        <div className="post-content">
                                <textarea value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div className="post-footer">
                            <div className="button-post" onClick={this.handleSubmit}>
                            <i class="fas fa-edit"></i>&nbsp;&nbsp;제보하기
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}

export default Post