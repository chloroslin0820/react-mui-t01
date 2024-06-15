import React, { useEffect, useState } from 'react';
import './display-content.css';
import LeftPanel from './left-panel/LeftPanel';
import RightPanel from './right-panel/RightPanel';

const DisplayContent = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 500);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div className="display_content">
        {
          isWideScreen && (
            <div>
              <LeftPanel />
            </div>
          )
        }
        <div>
            <RightPanel />
        </div>
    </div>
  );
}

export default DisplayContent;
