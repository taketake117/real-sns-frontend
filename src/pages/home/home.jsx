import React from 'react';
import "./home.css";
import Topbar from '../../compornents/Topbar/Topbar';
import Sidebar from '../../compornents/Sidebar/Sidebar';
import Timeline from '../../compornents/Timeline/Timeline';
import Rightbar from '../../compornents/Rightbar/Rightbar';

export default function Home() {
  return (
    <>
     <Topbar />
     <div className="homeContainer">
      <Sidebar />
      <Timeline />
      <Rightbar />
     </div>
    </>
  );
}
