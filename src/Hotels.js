import React from 'react';
import { Route, Link } from 'react-router-dom';

const Summary = () => (
    <div>
        Summary
    </div>
)

const Staffs = () => (
    <div>
        Staffs
    </div>
)

const Rooms = () => (
    <div>
        Rooms
    </div>
)


const Hotels = () => (
    <div>
        <h2>Hotel Links</h2>
        <Route path="/Hotels/summary" exact component={Summary} />
        <Route path="/Hotels/staffs" component={Staffs} />
        <Route path="/Hotels/rooms" component={Rooms} />
        <ul>
            <li><Link to="/Hotels/summary"> Summary </Link></li>
            <li><Link to="/Hotels/staffs"> Staffs </Link></li>
            <li><Link to="/Hotels/rooms"> Rooms </Link></li>
        </ul>

    </div>
)

export default Hotels;