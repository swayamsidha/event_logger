import React from 'react'
import {Layout} from 'antd'
import 'antd/dist/antd.css';

const {Content} = Layout
class Contents extends React.Component{
    constructor(props) {
        super(props)
    }


    render(){
        return(
            <Layout>
                <Content className = "site-layout-background"
                style = {
                        {
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }
                    } >
                    Content 
                </Content>
            </Layout>
        )
    }
}

export default Content