'use client';
import React, { useState, useEffect } from 'react';

// Bulletproof Client-Side Date Formatter Sub-Component
function SafeDateString({ ISOString }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <span style={{ visibility: 'hidden' }}>00/00/0000</span>;
    }

    return <>{new Date(ISOString).toLocaleDateString()}</>;
}

export default function DashboardLayout({ initialLeads = [] }) {
    const [activeTab, setActiveTab] = useState('leads');
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Track real-time window width dynamically
    useEffect(() => {
        const handleResize = () => {
            const mobileMode = window.innerWidth < 992;
            setIsMobile(mobileMode);
            if (!mobileMode) setMobileMenuOpen(false);
        };

        handleResize(); // Run initial calculation
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sidebarItems = [
        { id: 'leads', label: 'Leads', icon: '💼', count: initialLeads.length },
        { id: 'jobs', label: 'Job Applications', icon: '📄', count: 0 },
        { id: 'services', label: 'Services', icon: '🛠️', count: null }
    ];

    // Nav Links Sub-Renderer to avoid duplicated logic
    const renderNavLinks = (isMobileView) => (
        sidebarItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
                <button
                    key={item.id}
                    onClick={() => {
                        setActiveTab(item.id);
                        if (isMobileView) setMobileMenuOpen(false);
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '12px',
                        border: 'none',
                        borderRadius: '8px',
                        backgroundColor: isActive ? '#f1f5f9' : 'transparent',
                        color: isActive ? '#0f172a' : '#475569',
                        fontWeight: isActive ? '600' : '500',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textAlign: 'left'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '16px' }}>{item.icon}</span>
                        {item.label}
                    </div>
                    {item.count !== null && (
                        <span style={{
                            fontSize: '11px',
                            backgroundColor: isActive ? '#ffffff' : '#f1f5f9',
                            color: '#64748b',
                            padding: '2px 8px',
                            borderRadius: '20px',
                            fontWeight: '600',
                            border: isActive ? '1px solid #e2e8f0' : 'none'
                        }}>
                            {item.count}
                        </span>
                    )}
                </button>
            );
        })
    );

    return (
        <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            minHeight: '100vh',
            backgroundColor: '#f8fafc',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>

            {/* MOBILE HEADER NAVIGATION BAR */}
            {isMobile && (
                <header style={{
                    backgroundColor: '#ffffff',
                    padding: '16px 24px',
                    borderBottom: '1px solid #e2e8f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100
                }}>
                    <div>
                        <h1 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                            Pragati Ujjayini
                        </h1>
                        <span style={{ fontSize: '11px', fontWeight: '500', color: '#64748b' }}>Admin Portal</span>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            background: '#f1f5f9',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: '#0f172a',
                            fontWeight: 'bold'
                        }}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </header>
            )}

            {/* DYNAMIC MOBILE DRAWER MENU */}
            {isMobile && mobileMenuOpen && (
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '12px 16px',
                    borderBottom: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}>
                    {renderNavLinks(true)}
                </div>
            )}

            {/* DESKTOP SIDEBAR VIEW */}
            {!isMobile && (
                <aside style={{ width: '280px', backgroundColor: '#ffffff', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', padding: '24px 16px', position: 'sticky', top: 0, height: '100vh' }}>
                    <div style={{ padding: '0 12px 24px 12px', borderBottom: '1px solid #f1f5f9', marginBottom: '24px' }}>
                        <h1 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0, letterSpacing: '-0.025em' }}>
                            Pragati Ujjayini
                        </h1>
                        <span style={{ fontSize: '12px', fontWeight: '500', color: '#64748b' }}>Admin Portal</span>
                    </div>
                    <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {renderNavLinks(false)}
                    </nav>
                </aside>
            )}

            {/* MAIN PORTAL BODY CONTAINER */}
            <main style={{ flex: 1, padding: isMobile ? '24px 16px' : '40px' }}>
                {/* Header view title */}
                <header style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0', letterSpacing: '-0.025em' }}>
                        {sidebarItems.find(i => i.id === activeTab)?.label}
                    </h2>
                    <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                        Overview and management of incoming portal items.
                    </p>
                </header>

                {/* DYNAMIC VIEW SWITCHER PANEL */}
                {activeTab === 'leads' && (
                    initialLeads.length === 0 ? (
                        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '48px', textAlign: 'center', border: '1px solid #e2e8f0', color: '#64748b' }}>
                            No active business leads found.
                        </div>
                    ) : (
                        <div style={{
                            backgroundColor: isMobile ? 'transparent' : '#ffffff',
                            borderRadius: '12px',
                            border: isMobile ? 'none' : '1px solid #e2e8f0',
                            overflow: 'hidden',
                            boxShadow: isMobile ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
                        }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                            <th style={{ padding: '16px 24px', fontWeight: '600', color: '#475569' }}>Date</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600', color: '#475569' }}>Full Name</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600', color: '#475569' }}>Business Name</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600', color: '#475569' }}>Category / City</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600', color: '#475569' }}>Contact Info</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600', color: '#475569' }}>Services Needed</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600', color: '#475569' }}>Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {initialLeads.map((sub) => (
                                            <tr key={sub._id.toString()} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                                {/* Date Cell */}
                                                <td style={{ padding: '16px 24px', color: '#64748b', whiteSpace: 'nowrap' }}>
                                                    {sub.createdAt ? <SafeDateString ISOString={sub.createdAt} /> : 'N/A'}
                                                </td>
                                                {/* Full Name */}
                                                <td style={{ padding: '16px 24px', fontWeight: '600', color: '#0f172a' }}>
                                                    {sub.fullName}
                                                </td>
                                                {/* Business Name */}
                                                <td style={{ padding: '16px 24px', color: '#334155' }}>
                                                    {sub.businessName}
                                                </td>
                                                {/* Category & City */}
                                                <td style={{ padding: '16px 24px' }}>
                                                    <div style={{ color: '#0f172a', fontWeight: '500' }}>{sub.category}</div>
                                                    <div style={{ fontSize: '12px', color: '#64748b' }}>{sub.city}</div>
                                                </td>
                                                {/* Phone & Email */}
                                                <td style={{ padding: '16px 24px' }}>
                                                    <div style={{ color: '#0f172a' }}>{sub.email}</div>
                                                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{sub.phone}</div>
                                                </td>
                                                {/* Services List Tag Chips */}
                                                <td style={{ padding: '16px 24px' }}>
                                                    {sub.servicesNeeded && sub.servicesNeeded.length > 0 ? (
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                                            {sub.servicesNeeded.map((service, idx) => (
                                                                <span key={idx} style={{ backgroundColor: '#eff6ff', color: '#1e40af', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', whiteSpace: 'nowrap' }}>
                                                                    {service}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <span style={{ color: '#94a3b8', fontSize: '13px' }}>—</span>
                                                    )}
                                                </td>
                                                {/* Description Message Box */}
                                                <td style={{ padding: '16px 24px', color: '#475569', maxWidth: '280px', wordBreak: 'break-word', lineHeight: '1.5' }}>
                                                    {sub.message || <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>None</span>}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                )}

                {activeTab === 'jobs' && (
                    <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '48px', textAlign: 'center', border: '1px solid #e2e8f0', color: '#64748b' }}>
                        💼 No job applications submitted yet.
                    </div>
                )}

                {activeTab === 'services' && (
                    <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '48px', textAlign: 'center', border: '1px solid #e2e8f0', color: '#64748b' }}>
                        🛠️ Service listings options will load here.
                    </div>
                )}
            </main>
        </div>
    );
}