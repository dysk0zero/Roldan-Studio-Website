"use client";
import React, { useEffect } from 'react';
import { Observer } from 'tailwindcss-intersect';

export default function ObserverProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Observer.start();
  }, []);
 
  return <>{children}</>;
}