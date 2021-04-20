import React, { Component } from 'react';

import './home.less'

import { Steps, Divider } from 'antd';

const { Step } = Steps;

/**
 * 商品分类路由
 */
class Home extends Component {
    state = {
        current: 0,
    };
    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };
    render() {
        const { current } = this.state;
        return (
            <div className="home">
                <div className="header">上传通报清单</div>
                <div className="container">
                    <Steps current={current} onChange={this.onChange}>
                        <Step title="Step 1" description="This is a description." />
                        <Step title="Step 2" description="This is a description." />
                        <Step title="Step 3" description="This is a description." />
                    </Steps>
                </div>
            </div>
        );
    }
}

export default Home;