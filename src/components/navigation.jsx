import {Link} from 'react-router-dom'
import {Menu, Layout} from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import React from 'react'
import 'antd/dist/antd.css';

import Contents from './content'
const {SubMenu} = Menu
const {Sider, Header} = Layout
class Navigation extends React.Component{
    constructor(props){
        super(props)

        this.state={
            collapsed: false
        }
    }




    render(){
        return(
            <React.Fragment>
            <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className = 'logo'>
                <Menu theme = 'dark' mode = 'inline' defaultSelectedKeys={['1']}>

                    <Menu.Item key="3" icon={<UploadOutlined />}>
                                <div>
                                    <img src="" alt=""/>
                                </div>
                    </Menu.Item>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Create Events
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        Around Me
                    </Menu.Item>
                </Menu>
                </div>
            </Sider>
            </Layout>
                <Contents/>
            </React.Fragment>
        )
    }
}
export default Navigation