import type { ReactNode } from 'react';

export interface FolderProps {
  color?: string;
  size?: number;
  className?: string;
  /** Papers/stack content, rendered inside the open mouth of the folder. */
  children?: ReactNode;
}

/** A permanently-open decorative folder shell — the paper stack is composed by the caller. */
export function Folder({ color = 'var(--color-teal)', size = 1, className = '', children }: FolderProps) {
  // color-mix (rather than a JS hex-darken) so the back panel stays correct
  // when `color` is a CSS variable that changes with the theme toggle.
  const folderStyle = {
    ['--folder-color' as string]: color,
    ['--folder-back-color' as string]: `color-mix(in srgb, ${color} 92%, #000)`,
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
