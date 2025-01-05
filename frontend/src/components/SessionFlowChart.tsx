'use client';

import { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  Handle,
  Position,
  NodeProps,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Custom node components
const PlatformNode = ({ data }: NodeProps) => (
  <div className="px-4 py-2 shadow-lg rounded-lg bg-[#2c3e50] text-white min-w-[300px]">
    <div className="text-lg font-bold mb-2">Sendhuman Platform</div>
    <div className="grid grid-cols-2 gap-2 text-sm">
      <div className="bg-white/10 p-2 rounded">
        <div className="text-gray-300">Sent</div>
        <div className="text-blue-400 font-bold">{data.stats.sent}</div>
      </div>
      <div className="bg-white/10 p-2 rounded">
        <div className="text-gray-300">Read</div>
        <div className="text-green-400 font-bold">{data.stats.read}</div>
      </div>
      <div className="bg-white/10 p-2 rounded">
        <div className="text-gray-300">Replies</div>
        <div className="text-purple-400 font-bold">{data.stats.replied}</div>
      </div>
      <div className="bg-white/10 p-2 rounded">
        <div className="text-gray-300">Clicked</div>
        <div className="text-orange-400 font-bold">{data.stats.clicked}</div>
      </div>
    </div>
    <Handle type="source" position={Position.Bottom} className="!bg-blue-500" />
  </div>
);

const SessionNode = ({ data }: NodeProps) => (
  <div className="px-4 py-2 shadow-lg rounded-lg bg-white min-w-[250px]">
    <Handle type="target" position={Position.Top} className="!bg-blue-500" />
    <div className="flex items-center justify-center mb-2">
      <div className="w-10 h-10 rounded-full bg-white/80 p-2 flex items-center justify-center">
        <img src={data.logo} alt={data.name} className="w-6 h-6 object-contain" />
      </div>
    </div>
    <div className="text-center mb-2">
      <div className="font-semibold text-[#2c3e50]">{data.name}</div>
      <div className="text-sm text-blue-600">{data.mailbox}</div>
    </div>
    <div className="text-xs space-y-1">
      <div className="flex justify-between">
        <span>Sent</span>
        <span className="text-blue-600 font-semibold">{data.stats.sent}</span>
      </div>
      <div className="flex justify-between">
        <span>Read</span>
        <span className="text-green-600 font-semibold">{data.stats.read}</span>
      </div>
      <div className="flex justify-between">
        <span>Replies</span>
        <span className="text-purple-600 font-semibold">{data.stats.replied}</span>
      </div>
      <div className="flex justify-between">
        <span>Clicked</span>
        <span className="text-orange-600 font-semibold">{data.stats.clicked}</span>
      </div>
    </div>
  </div>
);

const nodeTypes = {
  platform: PlatformNode,
  session: SessionNode,
};

interface SessionFlowChartProps {
  sessions: Array<{
    name: string;
    logo: string;
    mailbox: string;
    stats: {
      sent: number;
      read: number;
      replied: number;
      clicked: number;
    };
  }>;
  totalStats: {
    sent: number;
    read: number;
    replied: number;
    clicked: number;
  };
}

export const SessionFlowChart = ({ sessions, totalStats }: SessionFlowChartProps) => {
  // Create nodes
  const nodes: Node[] = [
    {
      id: 'platform',
      type: 'platform',
      position: { x: 400, y: 0 },
      data: { stats: totalStats },
    },
    ...sessions.map((session, index) => ({
      id: `session-${index}`,
      type: 'session',
      position: { x: 200 + index * 300, y: 200 },
      data: session,
    })),
  ];

  // Create edges
  const edges: Edge[] = sessions.map((_, index) => ({
    id: `edge-${index}`,
    source: 'platform',
    target: `session-${index}`,
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
  }));

  const onNodeClick = useCallback(() => {}, []);

  return (
    <div className="h-[600px] bg-gray-50/50 rounded-xl">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        attributionPosition="bottom-left"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}; 