export type PageRoute =
  | { type: 'list' }
  | { type: 'detail'; extensionId: string }
  | { type: 'privacy'; extensionId?: string };

export interface ExtensionItem {
  id: string;
  name: string;
  version: string;
  status: 'published' | 'beta';
  category: string;
  tagline: string;
  description: string;
  lastUpdated: string;
  size: string;
  supportedBrowsers: string[];
  features: string[];
  usageGuide?: {
    title: string;
    description: string;
  }[];
  permissions: {
    key: string;
    label: string;
    description: string;
  }[];
  installSteps: {
    browser: string;
    steps: string[];
  }[];
  privacyPolicy: {
    summary: string;
    collectedData: string[];
    dataUsage: string;
    thirdPartySharing: string;
    lastUpdated: string;
    contactInfo?: string;
  };
  downloadFileName?: string;
  downloadUrl?: string;
  downloads?: {
    browser: string;
    url: string;
    fileName: string;
  }[];
  storeUrls?: {
    browser: string;
    url: string;
  }[];
  githubRepoUrl?: string;
  iconName?: string;
  previewImages?: string[];
}
