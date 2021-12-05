import { DatabaseType } from 'typeorm';

export class DatabaseConfig {
  static databaseTypeConvert(envDatabase: string): DatabaseType {
    let databaseType: DatabaseType;

    switch (envDatabase) {
      case 'postgres':
        databaseType = 'postgres';
        break;
      case 'mysql':
        databaseType = 'mysql';
        break;
      default:
        databaseType = 'postgres';
        break;
    }

    return databaseType;
  }
}
