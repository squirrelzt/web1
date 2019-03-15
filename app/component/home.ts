import React, { Component } from 'react'
import {  Menu, Breadcrumb, Icon, Row, Col, Button, message } from 'antd';
import { Link } from 'react-router'
import auth from '../common/auth';
const SubMenu = Menu.SubMenu;

export default class Home extends Component {
    // contextTypes: {
    //   // router: React.PropTypes.object.isRequired
    // }
    state={
        data: [],
        funcData:[],
        passVisible:false,
        defaultOpenKeys:[],
        selectedMenu:''
    }
    fetch(params = {}) {
        this.setState({ loading: true });
        auth.fetch('/listFiles','post',params,(result)=>{
            console.log("------------------");
            console.log(result);
            this.setState({
                data: result
            })
        });
    }

    componentWillMount(){
        this.fetch();
    }

    fileList(item) {
        if (item.directory) {
            return (
                <div key={item.filename + item.updateTime}>
            <img className="dir-img" src="./../../image/dir.png"/>
            <div className="monitor-file">{item.filename}</div>
            </div>

        )
        } else {
            return (
                <div key={item.filename + item.updateTime}>
            <img className="dir-img" src="./../../images/txt.png"/>
            <div className="monitor-file">{item.filename}</div>
            </div>
        )
        }
    }
    render() {
        const context = this.props.children;

        return (
            <div className="layout-aside" >
            <div className="layout-main" >
            <div className="header">
            <div className="title">FTP 监控中心</div>
        </div>
        <div className="monitor-frame">
        {this.state.data != null ?
            this.state.data.map(item => {
                return (<div>{this.fileList(item)}</div>)
            })
            : null}
        </div>
        <div className="layout-container">
        <div className="layout-content">
            {context}
            </div>
            </div>
            </div>
            </div>
    )
    }
};
