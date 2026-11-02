'use client';

import React, { useState, useRef, useEffect, useId } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  interactive?: boolean;
}

const PATH_VALVE =
  'M907.46 2042.31c-11.77,0 -13.98,7.35 -8.83,16.92l243.47 442.07c23.54,44.87 46.34,55.9 84.59,55.9l43.4 0c30.89,0 53.69,-11.03 77.97,-55.9l240.53 -442.07c5.15,-9.56 2.94,-16.92 -8.83,-16.92l-94.89 0c-9.56,0 -13.24,2.2 -16.92,9.56l-212.58 395.73c-2.21,3.68 -5.15,5.15 -8.83,5.15l-3.68 0c-3.68,0 -6.62,-1.47 -8.83,-5.15l-214.05 -395.73c-3.68,-7.36 -7.35,-9.56 -16.92,-9.56l-95.62 0zm887.09 0c-30.89,0 -53.7,11.03 -77.24,55.9l-241.26 442.07c-5.15,10.3 -2.94,16.92 8.83,16.92l96.36 0c9.56,0 13.24,-2.2 16.92,-8.83l47.81 -89.74 352.33 0 48.55 89.74c2.94,6.62 7.36,8.83 16.92,8.83l93.41 0c11.77,0 13.98,-6.62 8.83,-16.92l-243.47 -442.07c-24.28,-44.87 -46.34,-55.9 -84.59,-55.9l-43.4 0zm-97.09 320.7l113.28 -211.11c2.21,-3.68 4.41,-5.15 8.09,-5.15l4.41 0c3.68,0 6.62,1.47 8.83,5.15l114.01 211.11 -248.62 0zm517.1 -320.7c-11.03,0 -16.18,5.15 -16.18,16.18l0 304.52c0,141.23 56.64,194.19 205.96,194.19l301.58 0c10.3,0 16.18,-5.15 16.18,-16.18l0 -72.09c0,-11.03 -5.88,-16.18 -16.18,-16.18l-297.9 0c-75.76,0 -97.83,-22.8 -97.83,-100.77l0 -293.49c0,-11.03 -5.15,-16.18 -16.19,-16.18l-79.44 0zm414.86 0c-11.77,0 -13.98,7.35 -8.83,16.92l243.47 442.07c23.54,44.87 46.34,55.9 84.59,55.9l43.4 0c30.89,0 53.69,-11.03 77.97,-55.9l240.53 -442.07c5.15,-9.56 2.94,-16.92 -8.83,-16.92l-94.89 0c-9.56,0 -13.24,2.2 -16.92,9.56l-212.58 395.73c-2.21,3.68 -5.15,5.15 -8.83,5.15l-3.68 0c-3.68,0 -6.62,-1.47 -8.83,-5.15l-214.05 -395.73c-3.68,-7.36 -7.35,-9.56 -16.92,-9.56l-95.62 0zm915.04 0c-149.32,0 -205.96,53.7 -205.96,194.19l0 126.52c0,140.49 56.64,194.19 205.96,194.19l323.65 0c10.3,0 16.18,-5.15 16.18,-16.18l0 -71.35c0,-10.3 -5.88,-16.18 -16.18,-16.18l-322.91 0c-75.76,0 -95.62,-21.33 -95.62,-98.57l0 -8.83 414.12 0c10.3,0 16.18,-5.15 16.18,-16.18l0 -65.47c0,-11.03 -5.88,-16.18 -16.18,-16.18l-414.12 0 0 -3.68c0,-77.23 19.86,-98.57 95.62,-98.57l322.91 0c10.3,0 16.18,-5.88 16.18,-16.18l0 -71.35c0,-11.03 -5.88,-16.18 -16.18,-16.18l-323.65 0z';

const PATH_BRIDGE =
  'M1766.37 2723.59c-6.69,0 -10.04,3.34 -10.04,10.03l0 214.04c0,6.69 3.35,10.03 10.04,10.03l198.32 0c42.14,0 59.19,-20.07 59.19,-57.86l0 -19.4c0,-20.06 -7.36,-34.44 -22.74,-43.48 13.71,-9.03 21.07,-23.07 21.07,-42.14l0 -16.05c0,-38.13 -18.39,-55.18 -63.54,-55.18l-192.3 0zm40.8 135.78l137.12 0c21.74,0 29.09,5.02 29.09,19.4l0 11.04c0,14.72 -7.69,21.07 -24.75,21.07l-137.12 0c-3.01,0 -4.35,-1.34 -4.35,-4.69l0 -46.82zm0 -40.47l0 -43.81c0,-3.34 1.34,-4.68 4.35,-4.68l136.78 0c17.06,0 24.75,6.69 24.75,20.74l0 10.03c0,13.04 -7.02,17.72 -28.76,17.72l-137.12 0zm373.31 -95.31c-6.69,0 -10.04,3.34 -10.04,10.03l0 216.71c0,5.02 2.34,7.36 7.36,7.36l36.12 0c5.02,0 7.36,-2.34 7.36,-7.36l0 -64.88 106.02 0 53.17 67.89c2.34,3.01 4.02,4.35 9.37,4.35l44.81 0c5.35,0 7.02,-5.35 4.35,-8.7l-55.85 -69.22c33.11,-6.69 48.49,-29.43 48.49,-68.22l0 -19.4c0,-46.15 -22.07,-68.56 -71.9,-68.56l-179.26 0zm40.8 117.72l0 -67.22c0,-2.68 1.34,-3.68 4.35,-3.68l123.74 0c22.41,0 31.1,8.36 31.1,28.76l0 14.04c0,20.07 -8.36,28.09 -31.1,28.09l-128.09 0zm365.96 -117.72c-5.02,0 -7.36,2.34 -7.36,7.36l0 219.39c0,5.02 2.34,7.36 7.36,7.36l36.12 0c5.02,0 7.36,-2.34 7.36,-7.36l0 -219.39c0,-5.02 -2.34,-7.36 -7.36,-7.36l-36.12 0zm205.1 0c-6.69,0 -10.04,3.34 -10.04,10.03l0 214.04c0,6.69 3.35,10.03 10.04,10.03l156.18 0c72.57,0 102.33,-29.09 102.33,-94.31l0 -45.48c0,-65.22 -29.76,-94.31 -102.33,-94.31l-156.18 0zm40.8 51.5c0,-3.01 1.34,-4.35 4.35,-4.35l109.7 0c39.46,0 52.84,12.04 52.84,51.5l0 36.79c0,39.46 -13.38,51.5 -52.84,51.5l-109.7 0c-3.01,0 -4.35,-1.34 -4.35,-4.35l0 -131.1zm457.26 -51.5c-67.89,0 -93.64,24.08 -93.64,88.29l0 57.52c0,64.21 25.75,88.29 93.64,88.29l134.78 0c27.09,0 41.47,-13.71 41.47,-51.17l0 -79.59c0,-6.69 -3.34,-10.03 -10.03,-10.03l-139.46 0c-4.68,0 -7.35,2.67 -7.35,7.36l0 29.43c0,5.02 2.67,7.36 7.35,7.36l97.99 0c2.67,0 4.01,1.33 4.01,4.68l0 24.75c0,15.05 -5.02,20.07 -16.72,20.07l-110.37 0c-34.44,0 -44.48,-10.04 -44.48,-45.48l0 -48.16c0,-35.45 10.03,-45.82 44.48,-45.82l167.55 0c4.69,0 7.36,-2.34 7.36,-7.36l0 -32.77c0,-5.02 -2.67,-7.36 -7.36,-7.36l-169.22 0zm416.46 0c-67.89,0 -93.64,24.41 -93.64,88.29l0 57.52c0,63.88 25.75,88.29 93.64,88.29l147.15 0c4.68,0 7.36,-2.34 7.36,-7.36l0 -32.44c0,-4.68 -2.68,-7.35 -7.36,-7.35l-146.81 0c-34.45,0 -43.48,-9.7 -43.48,-44.81l0 -4.02 188.28 0c4.69,0 7.36,-2.34 7.36,-7.35l0 -29.77c0,-5.02 -2.67,-7.35 -7.36,-7.35l-188.28 0 0 -1.67c0,-35.11 9.03,-44.81 43.48,-44.81l146.81 0c4.68,0 7.36,-2.67 7.36,-7.36l0 -32.44c0,-5.02 -2.68,-7.36 -7.36,-7.36l-147.15 0z';

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  interactive,
}) => {
  const isLight = variant === 'light';
  const isInteractive = interactive !== undefined ? interactive : !isLight;

  const rawId = useId();
  const cleanId = rawId.replace(/[^a-zA-Z0-9_-]/g, '');
  const valveMaskId = `valve-mask-${cleanId}`;
  const sheenGradId = `valve-sheen-grad-${cleanId}`;

  const containerRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [sweepKey, setSweepKey] = useState(0);

  // Framer Motion spring-based magnetic values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Precision mechanical damping and stiffness
  const springConfig = { damping: 22, stiffness: 280, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const prefersReducedMotion = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    if (!isInteractive) return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsFinePointer(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [isInteractive]);

  const shouldAnimate = isInteractive && isFinePointer && !prefersReducedMotion;

  const handleMouseEnter = () => {
    if (!shouldAnimate) return;
    setIsHovered(true);
    setSweepKey((prev) => prev + 1);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!shouldAnimate || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    // Controlled magnetic displacement (max 3.2px X, 1.8px Y)
    mouseX.set(Math.max(-3.2, Math.min(3.2, deltaX * 3.2)));
    mouseY.set(Math.max(-1.8, Math.min(1.8, deltaY * 1.8)));
  };

  const handleMouseLeave = () => {
    if (!shouldAnimate) return;
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const primaryColor = isLight ? '#FFFFFF' : '#000066';
  const orangeColor = '#FF6600';

  return (
    <Link
      ref={containerRef}
      href="/"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center select-none ${className}`}
      aria-label="Valve Bridge Home"
    >
      <motion.div
        style={
          shouldAnimate
            ? {
                x: smoothX,
                y: smoothY,
              }
            : undefined
        }
        animate={
          shouldAnimate
            ? isHovered
              ? { scale: 1.032 }
              : { scale: 1 }
            : { scale: 1 }
        }
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative inline-flex items-center justify-center transform-gpu"
      >
        <svg
          viewBox="890 1940 3190 1120"
          className="h-12 md:h-14 w-auto max-w-[255px] md:max-w-[300px] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ shapeRendering: 'geometricPrecision' }}
          role="img"
          aria-hidden="true"
        >
          <defs>
            {/* Precise mask conforming strictly to the VALVE letters */}
            <mask
              id={valveMaskId}
              maskUnits="userSpaceOnUse"
              x="890"
              y="1940"
              width="3190"
              height="1120"
            >
              <path fill="#FFFFFF" fillRule="nonzero" d={PATH_VALVE} />
            </mask>

            {/* Specular metallic light-sweep gradient */}
            <linearGradient
              id={sheenGradId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientTransform="rotate(22)"
            >
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.80" />
              <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g id="valve-bridge-brand">
            {/* 1. BLUE VALVE TEXT with subtle elevation depth */}
            <path
              fill={primaryColor}
              fillRule="nonzero"
              d={PATH_VALVE}
              style={
                shouldAnimate
                  ? {
                      filter: isHovered
                        ? 'drop-shadow(0px 3px 5px rgba(0, 0, 102, 0.18))'
                        : 'drop-shadow(0px 0px 0px rgba(0, 0, 102, 0))',
                      transition: 'filter 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }
                  : undefined
              }
            />

            {/* 2. SPECULAR LIGHT-SWEEP across the VALVE text */}
            {shouldAnimate && isHovered && (
              <g mask={`url(#${valveMaskId})`}>
                <motion.rect
                  key={sweepKey}
                  x="0"
                  y="1800"
                  width="1200"
                  height="1200"
                  fill={`url(#${sheenGradId})`}
                  initial={{ x: -1200 }}
                  animate={{ x: 3800 }}
                  transition={{
                    duration: 0.85,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pointer-events-none"
                />
              </g>
            )}

            {/* 3. ORANGE BRIDGE TEXT smoothly shifting upward by a few pixels */}
            <motion.g
              animate={
                shouldAnimate
                  ? isHovered
                    ? { y: -38 }
                    : { y: 0 }
                  : { y: 0 }
              }
              transition={{
                type: 'spring',
                stiffness: 340,
                damping: 24,
                mass: 0.8,
              }}
            >
              <path
                fill={orangeColor}
                fillRule="nonzero"
                d={PATH_BRIDGE}
                style={
                  shouldAnimate
                    ? {
                        filter: isHovered
                          ? 'drop-shadow(0px 2px 7px rgba(255, 102, 0, 0.36)) brightness(1.05)'
                          : 'drop-shadow(0px 0px 0px rgba(255, 102, 0, 0)) brightness(1)',
                        transition:
                          'filter 0.35s cubic-bezier(0.16, 1, 0.3, 1), fill 0.35s ease',
                      }
                    : undefined
                }
              />
            </motion.g>

            {/* 4. RIGHT-SIDE VERTICAL BLUE LINE with smooth drawing/extension effect */}
            <motion.line
              x1="4052.9"
              y1="1952.75"
              x2="4052.9"
              y2="3047.24"
              stroke={primaryColor}
              strokeWidth="40.57"
              strokeLinecap="square"
              initial={{ pathLength: 1 }}
              animate={
                shouldAnimate
                  ? isHovered
                    ? { pathLength: [0.25, 1] }
                    : { pathLength: 1 }
                  : { pathLength: 1 }
              }
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </g>
        </svg>
      </motion.div>
    </Link>
  );
};

export default Logo;
