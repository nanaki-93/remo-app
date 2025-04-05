import {Store} from 'tinybase';
import {createExpoSqlitePersister} from 'tinybase/persisters/persister-expo-sqlite';
import * as SQLite from 'expo-sqlite';

export function getDB(store: Store) {
    return createExpoSqlitePersister(store, SQLite.openDatabaseSync('todos.db'));
}
