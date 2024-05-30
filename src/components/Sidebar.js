// Sidebar.js
import React from 'react';
import './Sidebar.css';
const Sidebar = ({ onSave }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      {/* <div className="description">You can drag these nodes to the pane on the right.</div> */}
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'textNode')} draggable>
        Message
      </div>
      <button onClick={onSave} className="save-button">Save</button> {/* Move the save button here */}
    </aside>
  );
};

export default Sidebar;
