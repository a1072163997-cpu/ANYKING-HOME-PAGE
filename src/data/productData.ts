import { ShellColor, Hotspot } from '../types';

export const SHELL_COLORS: Record<ShellColor, {
  name: string;
  nameEn: string;
  hex: string;
  accentClass: string;
  bgGradient: string;
  description: string;
}> = {
  lime: {
    name: '柠檬荧光黄',
    nameEn: 'Cyber Neon Lime',
    hex: '#DFFF00',
    accentClass: 'bg-[#DFFF00] text-black border-[#DFFF00]',
    bgGradient: 'from-lime-400/20 via-yellow-300/10 to-transparent',
    description: '活力高饱和荧光色彩，聚碳酸酯磨砂肤感外壳，复刻经典潮酷设计。',
  },
  obsidian: {
    name: '曜石极夜黑',
    nameEn: 'Obsidian Black',
    hex: '#1C1C1E',
    accentClass: 'bg-zinc-800 text-white border-zinc-700',
    bgGradient: 'from-zinc-800/30 via-zinc-900/20 to-transparent',
    description: '深沉铝合金微砂质感，商务与极简科技的完美融合。',
  },
  silver: {
    name: '星光金属银',
    nameEn: 'Starlight Silver',
    hex: '#E3E4E6',
    accentClass: 'bg-slate-200 text-slate-900 border-slate-300',
    bgGradient: 'from-slate-300/20 via-slate-100/10 to-transparent',
    description: '精工阳极氧化铝合金，细腻丝滑触感，匹配各类Mac/Windows设备。',
  },
  coral: {
    name: '日落霓虹粉',
    nameEn: 'Sunset Coral',
    hex: '#FF6B6B',
    accentClass: 'bg-rose-400 text-white border-rose-300',
    bgGradient: 'from-rose-500/20 via-orange-300/10 to-transparent',
    description: '温暖而具个性的日落渐变光彩，打破传统数码外壳的沉闷感。',
  },
};

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'display',
    x: 50,
    y: 40,
    title: '15.6″ 4K OLED 臻彩屏',
    description: '100% DCI-P3 广色域，100,000:1 超高对比度，峰值亮度 550 nits，带来影院级细腻画质。',
    iconName: 'Tv',
  },
  {
    id: 'ports',
    x: 12,
    y: 72,
    title: '双全功能 USB-C & Mini HDMI',
    description: '单线传输音视频与供电，兼容 Switch / Steam Deck / Mac / Windows / 手机盲插。',
    iconName: 'Zap',
  },
  {
    id: 'stand',
    x: 88,
    y: 65,
    title: '一体式磁吸折叠支架皮套',
    description: '支持 0°–180° 无级角度调节，防刮保护同时秒变坚固桌面支架。',
    iconName: 'Layers',
  },
  {
    id: 'thickness',
    x: 20,
    y: 25,
    title: '4.9mm 极薄羽量机身',
    description: '仅重 490 克，比传统笔记本电脑轻 60%，轻松塞入公文包与双肩包。',
    iconName: 'Feather',
  },
  {
    id: 'audio',
    x: 80,
    y: 25,
    title: '对称式双腔体 Stereo 扬声器',
    description: '内置 Hi-Res 级别立体声双扬声器，移动办公与观影无需外接音响。',
    iconName: 'Volume2',
  },
];

export const IMAGES = {
  back: '/src/assets/images/portable_monitor_back_1786585876768.jpg',
  front: '/src/assets/images/portable_monitor_front_1786585885940.jpg',
  desk: '/src/assets/images/portable_monitor_desk_1786585897833.jpg',
  slim: '/src/assets/images/portable_monitor_slim_1786585908398.jpg',
  heroTriple: '/src/assets/images/hero_triple_screen_1786670856872.jpg',
  heroDual: '/src/assets/images/hero_dual_screen_1786670868600.jpg',
  heroSingle: '/src/assets/images/hero_single_touch_1786670880595.jpg',
  heroSmart: '/src/assets/images/hero_smart_hub_1786670891068.jpg',
};
