import React from 'react'
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import "./Sidebar.css"
import Closefriend from '../Closefriend/Closefriend'
import { Users } from '../../dummyData';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to="/" style={{textDecoration: "none", color:"black"}}>
            <span className="sidebarListItemTex">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemTex">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemTex">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" />
            <span className="sidebarListItemTex">メッセージ</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemTex">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <Link to="/profile/M Code" style={{textDecoration: "none", color:"black"}}>
              <span className="sidebarListItemTex">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemTex">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
              <Closefriend user={user} key={user.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
