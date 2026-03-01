import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Anchor } from 'lucide-react';

const PullToRefresh: React.FC = () => {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const threshold = 120;

  const handleTouchStart = (e: TouchEvent) => {
    if (window.scrollY <= 0) {
      setStartY(e.touches[0].pageY);
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isAtTop || isRefreshing) return;

    const currentY = e.touches[0].pageY;
    const distance = currentY - startY;

    if (distance > 0) {
      // Apply resistance
      const resistedDistance = Math.min(distance * 0.4, threshold + 50);
      setPullDistance(resistedDistance);
      
      // Prevent default scroll if pulling down at top
      if (distance > 10) {
        if (e.cancelable) e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    if (pullDistance >= threshold) {
      triggerRefresh();
    } else {
      setPullDistance(0);
    }
  };

  const triggerRefresh = useCallback(() => {
    setIsRefreshing(true);
    setPullDistance(threshold);
    
    // Simulate refresh logic
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }, []);

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startY, isAtTop, pullDistance, isRefreshing]);

  // For desktop "force scroll" (overscroll-behavior is usually handled by browser, 
  // but we can try to detect wheel events at top)
  useEffect(() => {
    let wheelPull = 0;
    let timer: any = null;

    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY <= 0 && e.deltaY < -20 && !isRefreshing) {
        wheelPull += Math.abs(e.deltaY) * 0.2;
        setPullDistance(Math.min(wheelPull, threshold + 20));
        
        clearTimeout(timer);
        timer = setTimeout(() => {
          if (wheelPull >= threshold) {
            triggerRefresh();
          } else {
            wheelPull = 0;
            setPullDistance(0);
          }
        }, 150);
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timer);
    };
  }, [isRefreshing, triggerRefresh]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[110] pointer-events-none flex justify-center">
      <motion.div
        style={{ 
          y: pullDistance - 80,
          opacity: pullDistance / threshold 
        }}
        className="flex flex-col items-center gap-2"
      >
        <div className="bg-amber-400 text-stone-900 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-4 border-stone-900">
          {isRefreshing ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <RefreshCw className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              style={{ 
                rotate: (pullDistance / threshold) * 180,
                scale: Math.min(pullDistance / threshold, 1.2)
              }}
            >
              <Anchor className="w-6 h-6" />
            </motion.div>
          )}
        </div>
        <motion.span 
          style={{ opacity: (pullDistance / threshold) - 0.5 }}
          className="text-amber-400 font-display font-bold text-[10px] uppercase tracking-widest bg-stone-900/80 px-3 py-1 rounded-full backdrop-blur-sm"
        >
          {isRefreshing ? "Refreshing..." : "Pull to Refresh"}
        </motion.span>
      </motion.div>

      {/* Progress Bar at the very top */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-amber-400 z-[120]"
        style={{ width: `${(pullDistance / threshold) * 100}%` }}
      />

      {/* Full screen refresh overlay */}
      <AnimatePresence>
        {isRefreshing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[105] pointer-events-auto flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center text-stone-900 shadow-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <RefreshCw className="w-10 h-10" />
                </motion.div>
              </div>
              <span className="text-white font-display font-black text-2xl uppercase tracking-tighter">
                Refreshing...
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PullToRefresh;
