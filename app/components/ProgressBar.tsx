'use client';

import * as React from 'react';

import { useState, useEffect } from 'react';

import { Progress } from '@/components/ui/progress';

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className='w-full h-2 p-2 bg-red-600' />;
}

export default Progress;
