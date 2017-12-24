import { Route, Switch, withRouter } from 'react-router-dom';
import * as React from "react";
import HomePage from "../components/home/HomePage";
import AboutPage from "../components/about/AboutPage";
import CoursePage from "../components/course/CoursePage";
import ManagedCoursePage from "../components/course/ManagedCoursePage";
//import { Header } from "../components/header/Header";
import { connect } from "react-redux";
import { IAppState } from "../stores/configStore";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';

// Definition of props for PrimaryLayout component
export interface IPrimaryLayoutProps {
    loading: boolean; // Redux property. See mapStateToProps()
}

export interface IRoutesStates {
    collapsed: boolean;
    mode: string;
}


// PrimaryLayout defines the website's overall layout (e.g. header, body, route, etc)
//const Routes: (props: IPrimaryLayoutProps) => JSX.Element = (props: IPrimaryLayoutProps): JSX.Element => (
class Routes extends React.Component<{}, IRoutesStates> {
    constructor(props: any) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
        };

        this.toggle = this.toggle.bind(this);
    }

    public toggle(): void {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    public render(): JSX.Element {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/" className="nav-text">
                                <Icon type="user" />
                                <span className="nav-text">Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/about" className="nav-text">
                                <Icon type="video-camera" />
                                <span className="nav-text">About</span>
                            </Link>                       
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Link to="/courses" className="nav-text">
                        <Icon type="upload" />
                        <span className="nav-text">Courses</span>
                    </Link> 
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#000', padding: 0 }}>
                        <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{ cursor: 'pointer' }}
                            />
                        </span>
                        <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>Quantant Needle</span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff'}}>
                            <main>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/about" component={AboutPage} />
                                <Route path="/courses" exact component={CoursePage} />
                                <Route path="/course/:id?" component={ManagedCoursePage} />
                            </main>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2017 Created by Quantant
                    </Footer>
                </Layout>
            </Layout>);
    }
}

// Expose "loading" property to the component.
function mapStateToProps(state: IAppState, ownProps: any): any {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
// We must use withRouter so that location is injected as a property to the PrimaryLayout object, allowing it to 
// detect changes in location and re-render the child view
// connect() allows us to expose redux properties to React component
export default withRouter(connect(mapStateToProps, null, null)(Routes));