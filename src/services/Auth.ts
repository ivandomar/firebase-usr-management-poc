import { createUserWithEmailAndPassword } from 'firebase/auth';

import { firebaseAuth } from '../../config/firebase';

const AuthService = {
    signup: (email: string, password: string) => createUserWithEmailAndPassword(firebaseAuth, email, password),
};

export default AuthService;
