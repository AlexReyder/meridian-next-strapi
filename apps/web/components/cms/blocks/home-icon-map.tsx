import { TrendingUp, Trophy, Code, FileText, Users, GitBranch, LayoutGrid, Palette, MousePointer, Layers, FileCheck, Mail, CheckCircle, type LucideIcon } from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  'trending-up': TrendingUp,
  trophy: Trophy,
  code: Code,
  'file-text': FileText,
  users: Users,
  'git-branch': GitBranch,
  'layout-grid': LayoutGrid,
  palette: Palette,
  'mouse-pointer': MousePointer,
  layers: Layers,
  'file-check': FileCheck,
  mail: Mail,
  'check-circle': CheckCircle,
}

export function getHomeIcon(name?: string | null): LucideIcon {
  return ICONS[name || 'file-text'] || FileText
}
