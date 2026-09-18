import type { ReactNode } from 'react';

const darkenColor = (hex: string, percent: number) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map((c) => c + c)
      .join('');
  }
  const num = parseInt(color.slice(0, 6), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

export interface FolderProps {
  color?: string;
  size?: number;
  className?: string;
  /** Papers/stack content, rendered inside the open mouth of the folder. */
  children?: ReactNode;
}

/** A permanently-open decorative folder shell — the paper stack is composed by the caller. */
export function Folder({ color = '#5227FF', size = 1, className = '', children }: FolderProps) {
  const folderStyle = {
    ['--folder-color' as string]: color,
    ['--folder-back-color' as string]: darkenColor(color, 0.08),
  };

  return (
    <div style={{ transform: `scale(${size})` }} className={className}>
      <div className="folder open" style={folderStyle}>
        <div className="folder__back">
          {children}
          <div className="folder__front" />
          <div className="folder__front right" />
        </div>
      </div>
    </div>
  );
}

export default Folder;
