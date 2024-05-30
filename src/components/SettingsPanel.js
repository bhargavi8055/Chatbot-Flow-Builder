// src/components/SettingsPanel.js
import React from 'react';

const SettingsPanel = ({ selectedNode, onTextChange }) => {
  return (
    <aside>
      {selectedNode ? (
        <div className="settings-panel">
          <h3>Node Settings</h3>
          <input
            type="text"
            value={selectedNode.data.text}
            onChange={(e) => onTextChange(e.target.value)}
          />
        </div>
      ) : (
        <div className="settings-panel">Select a node to edit</div>
      )}
    </aside>
  );
};

export default SettingsPanel;
