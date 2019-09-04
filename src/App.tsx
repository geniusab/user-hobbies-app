import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header'
import List from "./components/List";
import './App.scss';

import Forms from "./components/Form";
import mock_users from "./service/mock";
import User from "./interfaces/User.interface";
import { addUser } from "./redux/actions";
import AddUser from "./components/Form/AddUser";

type AppProps = {
    users: Array<User>
    addUser: Function
}


const App: FunctionComponent<AppProps> = (props) => {
    const {users, addUser} = props;
    return (
        <div className="App">
            <List users={users}/>
            <AddUser addUser={addUser}/>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    users: state.users
});

export default connect(mapStateToProps, {addUser})(App);