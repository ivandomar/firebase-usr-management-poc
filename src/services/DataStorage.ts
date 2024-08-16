import { collection, addDoc } from 'firebase/firestore';

import { firestore } from '../../config/firebase';
import { CollectionName } from './Types/CollectionName';
import { User } from '../dtos/User';

const DataStorageService = {
    store: (collectionName: CollectionName, data: User) => addDoc(collection(firestore, collectionName), data),
};

export default DataStorageService;
