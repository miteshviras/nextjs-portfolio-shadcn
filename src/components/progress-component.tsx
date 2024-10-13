"use client";

import { Progress } from "@/components/ui/progress"; // Import Progress from your ShadCN component setup
import React from "react";

// Define the type for the component props
interface ProgressComponentProps {
  skill: string;
  level: number; // Assuming level is a percentage from 0 to 100
}

export const ProgressComponent = ({ skill, level }: ProgressComponentProps) => {
  const [progress, setProgress] = React.useState(0); // Initialize with 0 or any default value

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 750); // Simulate progress change
    return () => clearTimeout(timer);
  }, [level]); // Re-run the effect whenever the `level` prop changes

  return (
    <div className="flex gap-x-2 items-center">
      <label>{skill}</label>
      <div className="w-full">
        <Progress className="w-full" value={progress} />
      </div>
    </div>
  );
};

export default ProgressComponent;
