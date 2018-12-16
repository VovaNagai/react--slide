import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';
import Header from './components/header';
import Menu from './components/menu';
import Main from './components/main'

import GetData from './services/getData';
import PostData from './services/postData';
const request = new GetData,
      post = new PostData,
      data = {username: 'HeLLO'};
request.getAllPosts()
    .then (data => console.log(data));
post.postData('/posts', data)
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.log(error));


const url = process.env.PUBLIC_URL + '/img/bg.png';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 49px;
    background-color: #242424;
    opacity: 0.8;
`;

const MenuWrapper = styled.div`
    height: 89px;
    padding-top: 20px;
`;

const MainWrapper = styled.main`
    height: calc(100vh - 49px - 89px);
    padding-top: 130px;
    background: url(${url}) no-repeat;
    background-size: cover;
`;


class App extends Component {
  render() {
    return (
        <div className='App'>
            <HeaderWrapper>
                <Grid>
                    <Header/>
                </Grid>
            </HeaderWrapper>
            <MenuWrapper>
                <Grid>
                    <Menu/>
                </Grid>
            </MenuWrapper>
            <MainWrapper>
                <Grid>
                    <Main/>
                </Grid>
            </MainWrapper>
        </div>
    );
  }
}


export default App;
