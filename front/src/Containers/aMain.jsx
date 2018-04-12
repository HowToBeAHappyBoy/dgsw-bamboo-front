import React, { Component } from 'react';
import '../Assets/User.scss';
import Admin from './Admin';
import User from './User';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class aMain extends Component{
    constructor(){
        super();
        this.state={
          id:0,
          docs:null
        };
        this._getCount();
        this._getDocs();
      }
      _getCount=async ()=>{
        const url="http://ec2-13-125-167-78.ap-northeast-2.compute.amazonaws.com/api/admin/count";
        return axios.get(url,{
          headers:{
            Authorization:localStorage.getItem('@#!!@!@##!@!@!#!@!')
          }})
        .then(res=>this.setState({
          count:res.data.count
        }))
        .catch(err=>err);
      }
    
    
      _getDocs=async ()=>{
        let docs=await this._callApi();
        if(docs.status!==200){
          return;
        }
        if(this.state.docs===null){
          this.setState({
            id:this.state.id+5,
            docs:docs.data.posted
          })
          return;
        }else{
          let pastDocs=this.state.docs;
          let newDocs=docs.data.posted;
          this.setState({
            id:this.state.id+5,
            docs:pastDocs.concat(newDocs)
          });
          return;
        }
      };
    
      _callApi=()=>{
        let url='http://ec2-13-125-167-78.ap-northeast-2.compute.amazonaws.com/api/admin/posted/'+this.state.id;
        return axios.get(url,{
          headers:{
            Authorization:localStorage.getItem('@#!!@!@##!@!@!#!@!')
          }
        })
        .then((response)=>{
          return response;
        })
        .catch(err=> console.log(err));
      };
      _renderDocs=()=>{
        const docs=this.state.docs.map(doc=>{
          return(
            <Admin num={doc.idx} docs={doc.desc} date={doc.writeDate} key={doc.id}/>
            )
            return docs.reverse();
        });
        return docs;
      }

    render(){
        const {docs}=this.state;
        return(
            <div className="main">
                {docs?this._renderDocs():<i className="fas fa-circle-notch fa-spin"></i>}
                {
                    this.state.count<=this.state.id ?
                    "":<div className="more" onClick={this._getDocs}>
                            <i class="fas fa-plus"></i>&nbsp;&nbsp;더보기
                       </div>
                }
            </div>
        )
    }
}
export default aMain