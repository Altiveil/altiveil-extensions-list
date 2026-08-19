import { ExtensionItem } from '../types';
import { resolveAssetUrl } from './assetHelper';

export function handleExtensionDownload(
  extension: ExtensionItem,
  dlItem?: { browser: string; url: string; fileName: string }
) {
  if (dlItem && dlItem.url) {
    const resolvedUrl = resolveAssetUrl(dlItem.url);
    const a = document.createElement('a');
    a.href = resolvedUrl;
    a.download = dlItem.fileName || 'extension.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return;
  }

  if (extension.downloadUrl && extension.downloadUrl !== '#') {
    const resolvedUrl = resolveAssetUrl(extension.downloadUrl);
    const a = document.createElement('a');
    a.href = resolvedUrl;
    a.download = extension.downloadFileName || `${extension.id}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
