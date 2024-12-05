import React from 'react';
import '../styles/Sidebar.css';
import '../styles/Banner.css';


function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-link">
        New Arrivals <span className="arrow">→</span>
      </div>
      <div className="sidebar-link">
        Catalog <span className="arrow">→</span>
      </div>
      <div className="sidebar-link">
        Sale 30% <span className="arrow">→</span>
      </div>
    </aside>
  );
}

export default Sidebar;
