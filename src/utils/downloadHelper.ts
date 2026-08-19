import { ExtensionItem } from '../types';

export function handleExtensionDownload(
  extension: ExtensionItem,
  dlItem?: { browser: string; url: string; fileName: string }
) {
  if (dlItem && dlItem.url) {
    window.location.href = dlItem.url;
    return;
  }

  if (extension.downloadUrl && extension.downloadUrl !== '#') {
    window.location.href = extension.downloadUrl;
    return;
  }

  const manifestSample = {
    manifest_version: 3,
    name: extension.name,
    version: extension.version,
    description: extension.tagline,
    permissions: extension.permissions.map(p => p.key),
    action: {
      default_title: extension.name
    }
  };

  const fileContent = JSON.stringify(manifestSample, null, 2);
  const blob = new Blob([fileContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `${extension.id}-manifest-sample.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
