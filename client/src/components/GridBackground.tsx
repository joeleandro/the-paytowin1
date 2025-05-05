import React from 'react';

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(193, 255, 0, 0.1), rgba(255, 255, 0, 0.02)),
          linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))
        `,
        backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
        backgroundPosition: '0 0, 0 0, 0 0, 0 0',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `
            repeating-linear-gradient(#181818 0, #181818 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #181818 0, #181818 1px, transparent 1px, transparent 40px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0',
          backgroundAttachment: 'fixed',
          opacity: 0.6
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;
