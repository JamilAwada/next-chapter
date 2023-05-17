"use client";

import React, { useState } from 'react';
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    signUp();
    
  };

  const signUp = async () => {
   
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (email.length === 0) {
        setEmailError("Email is required")
      }
      if (password.length === 0) {
        setPasswordError("Password is required")
      }
      if (error.code === 'auth/missing-password') {
        setPasswordError("Password is required")
      }
      if (errorCode === 'auth/invalid-email') {
        setEmailError("Invalid email")
      }
      if (errorCode === 'auth/weak-password') {
        setPasswordError("Password must be at least 6 characters")
      }
      if (errorCode === 'auth/email-already-in-use') {
        setEmailError("Email already in use")
      }
     
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
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium mb-1">Email</label>
          <input
            type="text"
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
          
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            id="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none ${passwordError ? 'border-red-500' : ''}`}
          />
          {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
        </div>
        <button
          type="submit"
          className="bg-primarybtn text-white py-2 px-4 rounded hover:bg-primarybtn-hover transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;