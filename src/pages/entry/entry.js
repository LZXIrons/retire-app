import React, { Component } from 'react'
import { createHashHistory,createBrowserHistory } from 'history'; // 是hash路由 history路由 自己根据需求来定
import * as $Func from '../../utils/function.js'
import './entry.css';
import entryPic from "../../static/images/entry.jpg"
const history = createHashHistory();
export class entry extends Component {
  async componentDidMount() {
    await $Func.sleep(1500);
    history.push('/index');
  }
  
  render() {
    return (
      <div className="entry-page">
        <img src={entryPic} className="w-100 h-100"/>
      </div>
    )
  }
}

export default entry
