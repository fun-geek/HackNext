"use client";

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 text-center">
      <div className="flex min-w-[64px] flex-col items-center">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-pulse">
          {timeLeft.days}
        </div>
        <div className="text-sm text-muted-foreground">Days</div>
      </div>
      <div className="flex min-w-[64px] flex-col items-center">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-pulse">
          {timeLeft.hours}
        </div>
        <div className="text-sm text-muted-foreground">Hours</div>
      </div>
      <div className="flex min-w-[64px] flex-col items-center">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-pulse">
          {timeLeft.minutes}
        </div>
        <div className="text-sm text-muted-foreground">Minutes</div>
      </div>
      <div className="flex min-w-[64px] flex-col items-center">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-pulse">
          {timeLeft.seconds}
        </div>
        <div className="text-sm text-muted-foreground">Seconds</div>
      </div>
    </div>
  );
}