"use client";

import React, { useState } from 'react';
import { auth, googleProvider } from '../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const router = useRouter();

  const handleSubmit = (event) => {
    setEmailError('');
    setPasswordError('');
    event.preventDefault();
    login();
  };

  const login = async () => {
    
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        setEmailError("Invalid email")
      }
      if (errorCode === 'auth/user-not-found') {
        setEmailError("User not found")
      }
      if (errorCode === 'auth/missing-password') {
        setPasswordError("Password is required")
      }
      if (errorCode === 'auth/wrong-password') {
        setPasswordError("Incorrect password")
      }

    });
  }

  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = googleProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      router.push(`/${uid}`)
    }
  });

  return (
    <div className="max-w-md mx-auto my-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium mb-1">Email</label>
          <input
            type="email"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none ${emailError ? 'border-red-500' : ''}`}
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none ${passwordError ? 'border-red-500' : ''}`}
          />
           {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
        </div>
       
        <div className="my-4">
        <button
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={() => handleGoogleLogin()}
        >
          Login with Google
        </button>
      </div>
        <button
          type="submit"
          className="bg-primarybtn text-white py-2 px-4 rounded hover:bg-white hover:text-primarybtn hover:border hover:border-primarybtn transition duration-200"
        >
          Login
        </button>
        
      </form>
    </div>
  );
};

export default LoginForm;