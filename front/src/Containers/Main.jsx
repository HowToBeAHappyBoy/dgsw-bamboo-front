import React, { Component } from 'react';
import '../Assets/User.scss';
import User from './User';
import axios from 'axios';

class Main extends Component{
    constructor(){
        super();
        this._getCount();
        this.state={
            id:0,
            docs:null
        }
        this._getDocs();
    }
    _getDocs=async ()=>{
        let docs=await this._callApi();
        if(docs.status!==200){
          return;
        }
        if(this.state.docs===null){
          this.setState({
            id:this.state.id+5,
            docs:docs.data.posted.reverse()
          })
          console.log(this.state);
          return;
        }else{
          let pastDocs=this.state.docs;
          let newDocs=docs.data.posted.reverse();
          this.setState({
            id:this.state.id+5,
            docs:newDocs.concat(pastDocs)
          });
          console.log(this.state);
          return;
        }
    };
    _renderDocs=()=>{
        const docs=this.state.docs.map(doc=>{
          return(
            <User num={doc.idx} docs={doc.desc} writeDate={doc.writeDate} allowDate={doc.allowDate} key={doc.id}/>
            )
        });
        return docs.reverse();
    };
    _getCount=async ()=>{
        const url="http://ec2-13-125-167-78.ap-northeast-2.compute.amazonaws.com/api/user/count";
        return axios.get(url)
        .then(res=>{
            this.setState({
            ...this.state,
            count:res.data.count
            });
        })
        .catch(err=>err);
    };
    _callApi=()=>{
        let url='http://ec2-13-125-167-78.ap-northeast-2.compute.amazonaws.com/api/user/posted/'+this.state.id;
        return axios.get(url,{mode:'no-cors'})
        .then((response)=>{
          return response;
        })
        .catch(err=> console.log(err));
    };

    render(){
        const {docs}=this.state;
        return(
            <div className="main">
                {docs?this._renderDocs():<i className="fas fa-circle-notch fa-spin"></i>}
                {
                    this.state.count<=this.state.id?
                    "":<div className="more" onClick={this._getDocs}>
                            <i class="fas fa-plus"></i>&nbsp;&nbsp;더보기
                       </div>
                }
            </div>
        )
    }
}
export default Main