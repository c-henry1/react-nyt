import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import GetDate from "./Components/GetDate"
import GetWeather from "./Components/GetWeather"

function App () {



    return (
            <div className="app">
                <div className="body">
                    <div className="masthead">
                        <div className="header">
                            <div className="top-header">
                                <div className="menu-bar">
                                    <a href="#" className="menu-bar-link">
                                        <svg className="menu-icon" viewBox="0 0 16 16" width="16" height="16">
                                            <rect x= "1" y= "3" fill="#333" width="14" height="2"></rect>
                                            <rect x= "1" y= "7" fill="#333" width="14" height="2"></rect>
                                            <rect x= "1" y= "11" fill="#333" width="14" height="2"></rect>
                                        </svg>
                                    </a>
                                    <a href="#" className="menu-bar-link">
                                        <svg className="search-icon" viewBox="0 0 16 16" width="16" height="16">
                                            <path fill ="#333" d="M11.3,9.2C11.7,8.4,12,7.5,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1,0,1.9-0.3,2.7-0.7l3.3,3.3c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L11.3,9.2zM6.5,10.3c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C10.3,8.6,8.6,10.3,6.5,10.3z"></path>   
                                        </svg>
                                    </a>
                                </div>
                                
                                <div className="international-menu">
                                    <ul className="international-list">
                                        <li className="international-item">U.S.</li>
                                        <li className="international-item">INTERNATIONAL</li>
                                        <li className="international-item">CANADA</li>
                                        <li className="international-item">ESPAÑOL</li>
                                        <li className="international-item">中文</li>
                                    </ul>
                                </div>
                                <div className="action-btns">
                                    <a href="#" className="btn-link">
                                        <button className="action-btn">SUBSCRIBE NOW</button>
                                    </a>
                                    <a href="#" className="btn-link">
                                        <button className="action-btn">LOG IN</button>
                                    </a>
                                </div>
                            </div>
                            <div className="head-widgets">
                                <div className="date-widget">
                                    <div className="date"> { GetDate }</div>
                                    <div className="todays-paper">Today's Paper</div>
                                </div>
        
                                <div className="weather-widget">
                                    <GetWeather />
                                </div> 
                            </div>
        
                            <div className="logo-header">
                                <div className="logo-wrap">  
                                    <a href="#" className="logo-link">
                                        <img className="logo" src="https://logodownload.org/wp-content/uploads/2019/05/the-new-york-times-logo-1.png" alt="NYT logo"/>
                                    </a>
                                </div>
                            </div>    
                                
                        
                           
                            <div className="masthead-mini-nav">
                                <ul className="mini-nav-list">
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">World</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">U.S.</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Politics</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">N.Y.</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Business</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Opinion</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Tech</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Science</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Health</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Sports</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Arts</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Books</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Style</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Food</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Travel</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Magazine</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">T Magazine</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Real Estate</a>
                                    </li>
                                    <li className="mini-nav-item">
                                        <a className="mini-nav-link" href="#">Video</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            
        );
        
        
        
     
    
}   

    
export default App;