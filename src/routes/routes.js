//import react router dom
import { Switch, Route } from "react-router-dom";

//import component private routes
import PrivateRoute from "./PrivateRoutes";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Login from '../pages/admin/Login';

//import view admin Dashboard
import Dashboard from '../pages/admin/dashboard/Index';

//import view admin categories Index
import CategoriesIndex from '../pages/admin/categories/Index';

//import view admin category Create
import CategoryCreate from '../pages/admin/categories/Create';

function Routes() {
    return (
        <Switch>

            {/* route "/adminlogin" */}
            <Route exact path="/admin/login">
                <Login /> 
            </Route>

            {/* private route "/admin/dashboard" */}
            <PrivateRoute exact path="/admin/dashboard">
                <Dashboard /> 
            </PrivateRoute>

            {/* private route "/admin/categories" */}
            <PrivateRoute exact path="/admin/categories">
                <CategoriesIndex /> 
            </PrivateRoute>

            {/* private route "/admin/categories/create" */}
            <PrivateRoute exact path="/admin/categories/create">
                <CategoryCreate /> 
            </PrivateRoute>

        </Switch>
    )
}

export default Routes