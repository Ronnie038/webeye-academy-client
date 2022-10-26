import { createContext, useEffect, useState } from 'react';

import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	signInWithPopup,
	updateProfile,
	sendEmailVerification,
} from 'firebase/auth';
import { app } from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [themeToggle, setThemeToggle] = useState(false);

	const toggle = themeToggle ? 'dark' : 'light';
	const toggleDiv = themeToggle ? 'dark_div' : 'light_div';
	const toggleLink = themeToggle ? 'dark_link' : 'light_link';
	const toggleLinkDiv = themeToggle ? 'dark_link_div' : 'light_link_div';

	const providerLogin = (provider) => {
		return signInWithPopup(auth, provider);
	};
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};

	const varifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (curUser) => {
			setUser(curUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const AuthInfo = {
		user,
		loading,
		setLoading,
		providerLogin,
		createUser,
		signIn,
		updateUserProfile,
		varifyEmail,
		logOut,
		themeToggle,
		setThemeToggle,
		toggle,
		toggleDiv,
		toggleLink,
		toggleLinkDiv,
	};

	return (
		<AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
