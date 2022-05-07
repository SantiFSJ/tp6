import logo from './logo.svg';
import './App.css';
import  Menu from "./Menu";
import  Body from "./Body";
import { Component } from 'react';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      itemMenu : 0,
      searchTxt: "",
      };
    this.handlerItemMenuClicked = this.handlerItemMenuClicked.bind(this);
    this.handlerDoSearch = this.handlerDoSearch.bind(this);
  }

  handlerItemMenuClicked(itemClickleado){
    this.setState({
      itemMenu : itemClickleado,
      searchTxt: "0",
    });
  }

  handlerDoSearch(inputTxt){
    this.setState({
      searchTxt : inputTxt,
      itemMenu: 2,
    });
  }

  render(){
    return (
      <>
      <Menu 
      doSearch={this.handlerDoSearch}
      handler={this.handlerItemMenuClicked}
      />
      <Body 
      inputTxt= {this.state.searchTxt}
      itemClickled={this.state.itemMenu}
      />
      </>
    );
  }
}


