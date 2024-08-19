import React from 'react';
import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface FlowGraphProps {
  height?: string;
  width?: string;
}
  
  export default function FlowGraph(props:FlowGraphProps):JSX.Element {
    const { height = "100%", width = "100%" } = props;
  
    return (
    <div style={{width, height}}>
        <ReactFlow
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    )
  }