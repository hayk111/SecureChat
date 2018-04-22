import React from 'react';

const Sidebar = (props) => (
    <div className='Sidebar'>
        <div className="card hovercard">
            <div className="cardheader">

            </div>
            <div className="avatar">
                <img alt="" src={`http://localhost:5000/images/${props.currUser.profile_pic}`}/>
            </div>
            <div className="info">
                <div className="title">
                    <h4 className='curr_user_name'>{props.currUser.first_name} {props.currUser.last_name}</h4>
                </div>
                <div className='profile_settings'>
                    <a className='curr_user_settings'>Profile settings</a>
                </div>
            </div>
        </div>
        <hr className="style1"/>
        <div className="people-list" id="people-list">
            <div className="search">
                <input type="text" placeholder="search" />
                <i className="fa fa-search"></i>
            </div>
            <ul className="list">
                <div className='sidebarUser sidebarUserActive'>
                    <li className="clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                        <div className="about">
                            <div className="name">Vincent Porter</div>
                            <div className="status">
                                <i className="fa fa-circle online"></i> online
                            </div>
                        </div>
                    </li>
                </div>

                <div className='sidebarUser'>
                    <li className="clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg" alt="avatar" />
                        <div className="about">
                            <div className="name">Aiden Chavez</div>
                            <div className="status">
                                <i className="fa fa-circle offline"></i> left 7 mins ago
                            </div>
                        </div>
                    </li>
                </div>

            </ul>
        </div>
        <br />
        <button className='btn btn-danger' onClick={props.signOut}>Log out</button>
    </div>
);

export default Sidebar;