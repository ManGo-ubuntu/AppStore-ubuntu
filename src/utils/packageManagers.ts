import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface PackageInfo {
  name: string;
  version: string;
  description: string;
  size: string;
}

export const packageManagers = {
  async searchFlatpak(query: string): Promise<PackageInfo[]> {
    try {
      const { stdout } = await execAsync(`flatpak search ${query} --columns=name,version,description`);
      return parsePackageList(stdout, 'flatpak');
    } catch (error) {
      console.error('Ошибка при поиске Flatpak:', error);
      return [];
    }
  },

  async searchSnap(query: string): Promise<PackageInfo[]> {
    try {
      const { stdout } = await execAsync(`snap find ${query}`);
      return parsePackageList(stdout, 'snap');
    } catch (error) {
      console.error('Ошибка при поиске Snap:', error);
      return [];
    }
  },

  async installFlatpak(packageName: string): Promise<boolean> {
    try {
      await execAsync(`flatpak install -y ${packageName}`);
      return true;
    } catch (error) {
      console.error('Ошибка при установке Flatpak:', error);
      return false;
    }
  },

  async installSnap(packageName: string): Promise<boolean> {
    try {
      await execAsync(`snap install ${packageName}`);
      return true;
    } catch (error) {
      console.error('Ошибка при установке Snap:', error);
      return false;
    }
  },

  async uninstallFlatpak(packageName: string): Promise<boolean> {
    try {
      await execAsync(`flatpak uninstall -y ${packageName}`);
      return true;
    } catch (error) {
      console.error('Ошибка при удалении Flatpak:', error);
      return false;
    }
  },

  async uninstallSnap(packageName: string): Promise<boolean> {
    try {
      await execAsync(`snap remove ${packageName}`);
      return true;
    } catch (error) {
      console.error('Ошибка при удалении Snap:', error);
      return false;
    }
  },

  async getUpdates(): Promise<{ flatpak: PackageInfo[], snap: PackageInfo[] }> {
    const updates = {
      flatpak: [] as PackageInfo[],
      snap: [] as PackageInfo[],
    };

    try {
      const { stdout: flatpakUpdates } = await execAsync('flatpak update --no-deps');
      updates.flatpak = parsePackageList(flatpakUpdates, 'flatpak');
    } catch (error) {
      console.error('Ошибка при проверке обновлений Flatpak:', error);
    }

    try {
      const { stdout: snapUpdates } = await execAsync('snap refresh --list');
      updates.snap = parsePackageList(snapUpdates, 'snap');
    } catch (error) {
      console.error('Ошибка при проверке обновлений Snap:', error);
    }

    return updates;
  },
};

function parsePackageList(output: string, type: 'flatpak' | 'snap'): PackageInfo[] {
  const lines = output.split('\n').filter(line => line.trim());
  
  if (type === 'flatpak') {
    // Пропускаем заголовок
    return lines.slice(1).map(line => {
      const [name, version, ...descParts] = line.split('\t');
      return {
        name: name.trim(),
        version: version.trim(),
        description: descParts.join(' ').trim(),
        size: 'N/A', // Flatpak не предоставляет размер в выводе поиска
      };
    });
  } else {
    // Пропускаем заголовок для snap
    return lines.slice(1).map(line => {
      const parts = line.split(/\s{2,}/);
      return {
        name: parts[0],
        version: parts[1] || 'N/A',
        description: parts[3] || '',
        size: parts[2] || 'N/A',
      };
    });
  }
}

export default packageManagers; 