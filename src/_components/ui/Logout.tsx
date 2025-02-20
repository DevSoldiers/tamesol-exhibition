'use client';
import { useState } from 'react';
import { signOut } from 'next-auth/react';

export default function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut();
    setLoading(false);
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`px-6 py-2 rounded-lg bg-BroadcastChannel hover:bg-secondarybrand text-white font-semibold shadow-md transition-all duration-300 ease-in-out transform ${
        loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
      } focus:outline-none focus:ring-2 focus:ring-secondarybrand`}
    >
      {loading ? 'Signing out...' : 'Log Out'}
    </button>
  );
}
