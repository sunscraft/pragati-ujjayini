'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        const res = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            router.push('/admin/dashboard');
        } else {
            const data = await res.json();
            setError(data.error || 'Invalid credentials');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '420px',
                backgroundColor: '#ffffff',
                padding: '40px 35px',
                borderRadius: '12px',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #eaedf1'
            }}>
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h2 style={{
                        margin: '0 0 8px 0',
                        color: '#0f172a',
                        fontSize: '26px',
                        fontWeight: '700',
                        letterSpacing: '-0.5px'
                    }}>
                        Welcome Back
                    </h2>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
                        Please enter your admin credentials
                    </p>
                </div>

                <form onSubmit={handleLogin}>
                    {/* Username Input Container */}
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '6px',
                            color: '#334155',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}>
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                            placeholder="Enter admin username"
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                borderRadius: '8px',
                                border: '1px solid #cbd5e1',
                                fontSize: '15px',
                                color: '#1e293b',
                                outline: 'none',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.2s ease'
                            }}
                        />
                    </div>

                    {/* Password Input Container */}
                    <div style={{ marginBottom: '24px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '6px',
                            color: '#334155',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}>
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                borderRadius: '8px',
                                border: '1px solid #cbd5e1',
                                fontSize: '15px',
                                color: '#1e293b',
                                outline: 'none',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.2s ease'
                            }}
                        />
                    </div>

                    {/* Error Box */}
                    {error && (
                        <div style={{
                            backgroundColor: '#fef2f2',
                            border: '1px solid #fca5a5',
                            borderRadius: '8px',
                            padding: '12px',
                            marginBottom: '20px'
                        }}>
                            <p style={{ color: '#b91c1c', margin: 0, fontSize: '13px', fontWeight: '500' }}>
                                ⚠️ {error}
                            </p>
                        </div>
                    )}

                    {/* Pragati-Themed Submit Button */}
                    <button
                        type="submit"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            width: '100%',
                            padding: '13px',
                            backgroundColor: isHovered ? '#d95318' : '#f26522', // Matches your brand orange
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '15px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: isHovered ? '0 4px 12px rgba(242, 101, 34, 0.25)' : 'none',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}