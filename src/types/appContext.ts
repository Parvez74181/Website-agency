export interface AppContextValues {
  isHovering: boolean;
  maskColor: string;
  size: number;
  opacity: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  setIsHovering: (isHovering: boolean) => void;
  setMaskColor: (maskColor: string) => void;
  setOpacity: (opacity: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100) => void;
  setSize: (size: number) => void;
}
