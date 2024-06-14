import React from 'react';
import './display-content.css';
import LeftPanel from './left-panel/LeftPanel';
import RightPanel from './right-panel/RightPanel';

const DisplayContent = () => {
  return (
    <div className="display_content">
        <div>
            <LeftPanel />
        </div>
        <div>
            <RightPanel />
        </div>
    </div>
  );
}

export default DisplayContent;
