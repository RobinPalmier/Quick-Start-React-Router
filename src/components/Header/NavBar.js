import React from 'react';
import { roadMap } from '../../router';
import { NavLink, Route } from 'react-router-dom';

const NavBar = () => 
        roadMap.map((prop, key) => 
            !prop.redirect
            ? <NavLink to={prop.path} key={key} activeClassName="active">
                {prop.name}
              </NavLink>
            : <Route path={prop.path} component={prop.component} key={key} />
        )

export default NavBar;