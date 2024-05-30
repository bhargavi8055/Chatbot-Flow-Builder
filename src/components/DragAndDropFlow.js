// DragAndDropFlow.js
import React, { useState } from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import Sidebar from './Sidebar';
import FlowChart from './FlowChart';
import SettingsPanel from './SettingsPanel';

const DragAndDropFlow = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleNodeSelect = (node) => {
    setSelectedNode(node);
  };

  const handleTextChange = (text) => {
    setSelectedNode((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        text,
      },
    }));
  };

  const handleSave = () => {
    // Filter nodes with empty target handles
    const nodesWithEmptyTarget = nodes.filter((node) => {
      const targetEdges = edges.filter((edge) => edge.target === node.id);
      return targetEdges.length === 0;
    });
  
    // Count occurrences of each node
    const nodeCountMap = {};
    nodesWithEmptyTarget.forEach((node) => {
      if (!nodeCountMap[node.id]) {
        nodeCountMap[node.id] = 0;
      }
      nodeCountMap[node.id]++;
    });
  
    // Check if more than one node has empty target handles
    const nodesWithEmptyTargetCount = Object.values(nodeCountMap).filter((count) => count > 1).length;
    if (nodesWithEmptyTargetCount > 1) {
      alert('Error: More than one node has empty target handles.');
      return;
    }
  
    alert('Flow saved!');
  };

  return (
    <ReactFlowProvider>
      <div className="dndflow">
      <SettingsPanel selectedNode={selectedNode} onTextChange={handleTextChange} />
       
        <FlowChart
          nodes={nodes}
          setNodes={setNodes}
          edges={edges}
          setEdges={setEdges}
          onNodeSelect={handleNodeSelect}
        />
         <Sidebar onSave={handleSave} /> {/* Pass handleSave as a prop to Sidebar */}
      </div>
    </ReactFlowProvider>
  );
};

export default DragAndDropFlow;
