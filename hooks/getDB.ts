import {Store} from 'tinybase';
import {createLocalPersister} from 'tinybase/persisters/persister-browser';


export function getDB(store: Store) {
    return createLocalPersister(store, 'todos');
}
