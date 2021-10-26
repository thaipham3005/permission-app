import './App.css'
import { useContext, useReducer, useRef, useEffect, useState } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'

import {Navbar,  GeoLocation, FloatingMenu } from './components'



function App() {
    return (
        <div className="container">
            <Navbar />
            <FloatingMenu />
            <Router>
                <Switch>
                    <Route exact path='/' component={GeoLocation}/>
                    {/* Geolocation */}
                    <Route exact path='/geolocation' component={GeoLocation} />
                    {/* Device motion */}
                    <Route />
                    {/* Contact picker  */}
                    <Route />
                    {/* Idle detection  */}
                    <Route />
                    {/* Media device: Camera access  */}
                    <Route />                                         
                    {/* Media device: Microphone/ speaker access  */}
                    <Route />
                    {/* File access  */}
                    <Route />
                    {/* Bluetooth access */}
                    <Route />
                    {/* Web share  */}
                    <Route />
                    {/* Storage/ USB access  */}
                    <Route />
                    {/* Wake lock  */}
                    <Route />
                    {/* Battery access  */}
                    <Route />
                    {/* App badge  */}
                    <Route />
                    {/* Touch menu  */}
                    <Route />
                    {/* WebRTC */}
                    <Route />
                    {/* Notification */}
                    <Route />
                    {/* Screen brightness */}
                    <Route />
                    {/* Popup and redirects */}
                    <Route />
                    {/* Device use access */}
                    <Route />
                </Switch>                                               
            </Router>
        </div>

    );
}

export default App;
