import React from 'react';
import { 
  LayoutGrid, 
  Code, 
  BookOpen, 
  Download, 
  ShieldCheck, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Search, 
  Filter, 
  ArrowLeft, 
  FileCode, 
  Layers, 
  Copy, 
  Check, 
  Sparkles, 
  FolderDown,
  Globe
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'LayoutGrid':
      return <LayoutGrid className={className} />;
    case 'Code':
      return <Code className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Download':
      return <Download className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'ExternalLink':
      return <ExternalLink className={className} />;
    case 'Github':
      return <Github className={className} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} />;
    case 'AlertCircle':
      return <AlertCircle className={className} />;
    case 'HelpCircle':
      return <HelpCircle className={className} />;
    case 'Search':
      return <Search className={className} />;
    case 'Filter':
      return <Filter className={className} />;
    case 'ArrowLeft':
      return <ArrowLeft className={className} />;
    case 'FileCode':
      return <FileCode className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Copy':
      return <Copy className={className} />;
    case 'Check':
      return <Check className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'FolderDown':
      return <FolderDown className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    default:
      return <Layers className={className} />;
  }
};
