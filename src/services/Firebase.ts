import { createUserWithEmailAndPassword } from 'firebase/auth';

import { firebaseAuth } from '../../config/firebase';

const firebaseService = {
    signup: (email: string, password: string) => createUserWithEmailAndPassword(firebaseAuth, email, password),
};

export default firebaseService;
