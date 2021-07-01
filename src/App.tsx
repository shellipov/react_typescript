import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import FuckingPage from "./components/FuckingPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";


function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <div>

                        <NavLink to={'/users'}> Users </NavLink>
                        <NavLink to={'/todos'}> Todos </NavLink>
                        <NavLink to={'/fuck'}> Other </NavLink>
                        
                    </div>
                    <Route path={'/users'} exact>
                        <UserPage/>
                    </Route>

                    <Route path={'/todos'} exact>
                        <TodosPage/>
                    </Route>

                    <Route path={'/user/:id'} >
                        <UserItemPage/>
                    </Route>


                    <Route path={'/todo/:id'} >
                        <TodoItemPage/>
                    </Route>

                    <Route path={'/fuck'} exact>
                        <FuckingPage/>
                    </Route>
                </div>

            </BrowserRouter>


        </div>
    )
}

export default App;
