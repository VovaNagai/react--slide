import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
  font-size: 18px;
  color: #464646;
  line-height: 22px;
  font-weight: 300;
}
`;
const WorkTime = styled.div`
  font-size: 12px;
  color: #2a2a2a;
  line-height: 24px;
  font-weight: 300;
  
  span {
    display: block;
    font-size: 21px;
    color: #464646;
    font-weight: 700;
  }
`;
const Calls = styled.div`
  font-size: 12px;
  color: #2a2a2a;
  line-height: 24px;
  font-weight: 300;
  
  span {
    display: block;
    font-size: 21px;
    color: #464646;
    font-weight: 700;
  }
`;
const CallButton = styled.button`
   width: 176px;
   height: 48px;
   background-color: #3fc7db;
   border-radius: 30px;
   color: #fff;
   font-size: 14px;
   font-weight: 400;
`;

class Adress extends React.Component {
    render() {
        return (
            <span>{this.props.addr}</span>
        )
    }
}
class TelNumber extends React.Component {
    render() {
        return (
            <span>{this.props.tel}</span>
        )
    }
}

class Menu extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <Repair>
                        Ремонт айфонов в сервисном центре и на выезде
                    </Repair>
                </Col>
                <Col lg={3} lgOffset={1}>
                    <WorkTime>
                        Пн-пт с 10 до 20, сб,вс с 11 до 18
                        <Adress addr='Ленинская, 301'/>
                    </WorkTime>
                </Col>
                <Col lg={3}>
                    <Calls>
                        Звонки принимаются 24 часа
                        <TelNumber tel='8 (846) 922 55 44'/>
                    </Calls>
                </Col>
                <Col lg={2}>
                    <CallButton>Заказать звонок!</CallButton>
                </Col>
            </Row>
        )

    }
}

export default Menu