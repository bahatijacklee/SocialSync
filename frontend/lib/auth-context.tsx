'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api } from './api';

interface User {
  userId: string;
  token: string;
}

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  location?: string;
  bio?: string;
  connectedAccounts?: Array<{
    platform: string;
    username: string;
    isConnected: boolean;
  }>;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<string>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      // Fetch profile when user data is loaded
      refreshProfile();
    }
  }, []);

  const refreshProfile = async () => {
    if (!user?.token) return;
    try {
      const userProfile = await api.getProfile(user.token);
      setProfile(userProfile);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.login(email, password);
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response));
      await refreshProfile();
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const register = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      const response = await api.register(email, password, firstName, lastName);
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response));
      await refreshProfile();
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setProfile(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  const forgotPassword = async (email: string) => {
    try {
      const response = await api.forgotPassword(email);
      return response.resetToken || '';
    } catch (error) {
      throw error;
    }
  };

  const resetPassword = async (token: string, newPassword: string) => {
    try {
      await api.resetPassword(token, newPassword);
      router.push('/login');
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, login, register, logout, forgotPassword, resetPassword, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 