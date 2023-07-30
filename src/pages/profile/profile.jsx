import React from 'react'
import Topbar from '../../compornents/Topbar/Topbar'
import Sidebar from '../../compornents/Sidebar/Sidebar'
import Rightbar from '../../compornents/Rightbar/Rightbar'
import Timeline from '../../compornents/Timeline/Timeline'
import "./profile.css"

export default function profile() {
  return (
    <>
     <Topbar />
     <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src="assets/post/3.jpeg" alt="" className='profileCoverImg'/>
            <img src="assets/person/1.jpeg" alt=""  className='profileUserImg'/>
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>M code</h4>
            <span className="profileInfoDesc">独学でReactを勉強しています。</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Timeline />
          <Rightbar profile />
        </div>
      </div>
     </div>
    </>
  )
}
