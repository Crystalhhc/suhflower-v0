'use client';
import React, { useState } from "react";
import { DndProvider } from "@minoru/react-dnd-treeview";
import {
  Tree,
  NodeModel,
  MultiBackend,
  getBackendOptions
} from "@minoru/react-dnd-treeview";

import SampleData from "./sampleData.json";
//import "./App.css";

export default function DocTree() {
  const [treeData, setTreeData] = useState<NodeModel[]>(SampleData);
  const handleDrop = (newTree: NodeModel[]) => setTreeData(newTree);

  return (
    <div className="app">
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <Tree
          tree={treeData}
          rootId={0}
          render={(node, { depth, isOpen, onToggle }) => (
            <div style={{ marginInlineStart: depth * 10 }}>
              {node.droppable && (
                <span onClick={onToggle}>{isOpen ? "[-]" : "[+]"}</span>
              )}
              {node.text}
            </div>
          )}
          dragPreviewRender={(monitorProps) => (
            <div>{monitorProps.item.text}</div>
          )}
          onDrop={handleDrop}
        />
      </DndProvider>
    </div>
  );
}