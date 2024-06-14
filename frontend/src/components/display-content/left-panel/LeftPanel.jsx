import React from 'react';
import './left-panel.css';

const LeftPanel = () => {
  return (
    <div className="left_panel">
      <div className="left_panel_brand">
        <div className="left_panel_brand_header">
            <h4>Brands</h4>
        </div>
        <div className="left_panel_brand_name_list">
            <div>
            <label>
                <input type="checkbox" value="apple" />Apple
            </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" value="samsung" />Samsung
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" value="mi" />Mi
                </label>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
