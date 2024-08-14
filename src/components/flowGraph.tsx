import React from 'react';
import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface FlowGraphProps {
  height?: string;
  width?: string;
}
  
  export default function FlowGraph(props:FlowGraphProps):JSX.Element {
    const { height = "200px", width = "200px" } = props;
  
    return (
    <div style={{height, width}}>
        <ReactFlow>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    )
  }