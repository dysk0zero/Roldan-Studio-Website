"use client";

import React, { useEffect } from 'react';
import { Observer } from 'tailwindcss-intersect';

interface ObserverProviderProps {
  children: React.ReactNode;
}

const ObserverProvider: React.FC<ObserverProviderProps> = ({ children }: ObserverProviderProps) => {
  useEffect(() => {
    // Start the intersection observer
    Observer.start();
    
    // Cleanup
    return () => {
      // No explicit cleanup needed as per documentation
    };
  }, []);

  return <>{children}</>;
};

export default ObserverProvider;