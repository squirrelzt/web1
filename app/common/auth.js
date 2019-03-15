import reqwest from 'reqwest';
import React , { Component } from 'react'
import { Modal } from 'antd';

module.exports = {
  fetch(url, method, params, callback) {
    let api = this.getPath();
    reqwest({
      url: api+url,
      method: method,
      data: params,
      type: 'json',
      success: (result) => {
        // console.log("---------------------");
        // console.log(result)
        callback(result);
      },
      error: (err) => {
        console.log(err);
        callback({result:'1',msg:err});
      }
    });
  },
  getToken() {
    return localStorage.token
  },
  message(message,msg){
      message.error(msg, 10);
  },
  logout(cb) {
    delete localStorage.token
    if (cb) cb()
  },
  loggedIn() {
    return !!localStorage.token
  },
  getPath(){
    // return 'http://10.0.27.61:8085';//window.location.host;
    // return 'http://10.0.52.169:8080';
    // return '';
      return 'http://localhost:8080/ftp'
  }
}
