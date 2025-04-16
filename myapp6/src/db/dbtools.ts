/*
https://www.amarjanica.com/import-and-export-sqlite-database-in-expo-native-and-web/
https://github.com/amarjanica/react-native-sqlite-expo-demo
*/
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';
import { openDatabaseSync } from 'expo-sqlite';
import logger from './logger';

export const backupDatabase = async (dbName: string, backupName: string) => {

    const db = openDatabaseSync(dbName);

    try {
        await db.execAsync('PRAGMA wal_checkpoint(FULL)');
        const backupPath = `${FileSystem.documentDirectory}SQLite/${backupName}`;
        const databasePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
        await FileSystem.copyAsync({
            from: databasePath,
            to: backupPath,
        });
        await Sharing.shareAsync(backupPath, { mimeType: 'application/x-sqlite3' });
        await FileSystem.deleteAsync(backupPath, { idempotent: true });
    } catch (error) {
        logger.error('Failed to backup the database:', error);
    }
};

export const restoreDatabase = async (dbName: string) => {
  try {
    const appPath = FileSystem.documentDirectory;
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      copyToCacheDirectory: true,
      multiple: false,
    });
    if (result.canceled) {
      return;
    }
    const backupPath = result.assets[0].uri;
    if (!(await FileSystem.getInfoAsync(backupPath)).exists) {
      return;
    }
    //await db.execAsync('PRAGMA wal_checkpoint(FULL)');
    //await db.closeAsync();
    const dbPath = `${appPath}/SQLite/${dbName}`;
    await FileSystem.deleteAsync(`${dbPath}-wal`, { idempotent: true });
    await FileSystem.deleteAsync(`${dbPath}-shm`, { idempotent: true });

    await FileSystem.copyAsync({
      to: dbPath,
      from: backupPath,
    });
  } catch (err) {
    logger.error('Failed to restore', err);
  }
};