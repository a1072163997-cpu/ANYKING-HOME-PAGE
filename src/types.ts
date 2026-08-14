export type ShellColor = 'lime' | 'obsidian' | 'silver' | 'coral';

export type DisplayMode = 'motion_art' | 'coding' | 'design' | 'gaming';

export type ViewPerspective = 'back' | 'front' | 'side' | 'desk';

export type DisplaySize = '14.0' | '15.6' | '17.3';

export type PanelType = '2.5K 120Hz IPS' | '4K 60Hz OLED' | '4K 120Hz OLED Touch';

export interface ProductConfig {
  size: DisplaySize;
  panel: PanelType;
  color: ShellColor;
  bundleTouchPen: boolean;
  bundlePowerBank: boolean;
}

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
  iconName: string;
}
