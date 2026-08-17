'use client';
import React, { useState, useEffect } from 'react';
import RichTextEditor from '@/components/admin/RichTextEditor';

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

// Strip HTML tags for plain-text excerpt preview in the admin list
function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

const EMPTY_FORM = { title: '', content: '', image: '', author: 'Admin' };

export default function DashboardLayout({ initialLeads = [], initialBlogs = [] }) {
    const [activeTab, setActiveTab] = useState('leads');
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Blog state
    const [blogs, setBlogs] = useState(initialBlogs);
    const [showBlogForm, setShowBlogForm] = useState(false);
    const [editingId, setEditingId] = useState(null); // null = creating, otherwise editing this _id
    const [blogForm, setBlogForm] = useState(EMPTY_FORM);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState('');
    const [deletingId, setDeletingId] = useState(null);

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
        { id: 'blogs', label: 'Blogs', icon: '📝', count: blogs.length },
        { id: 'services', label: 'Services', icon: '🛠️', count: null }
    ];

    const handleBlogFormChange = (field, value) => {
        setBlogForm((prev) => ({ ...prev, [field]: value }));
    };

    const openNewBlogForm = () => {
        setEditingId(null);
        setBlogForm(EMPTY_FORM);
        setFormError('');
        setShowBlogForm(true);
    };

    const openEditBlogForm = (post) => {
        setEditingId(post._id);
        setBlogForm({
            title: post.title || '',
            content: post.content || '',
            image: post.image || '',
            author: post.author || 'Admin',
        });
        setFormError('');
        setShowBlogForm(true);
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const closeBlogForm = () => {
        setShowBlogForm(false);
        setEditingId(null);
        setBlogForm(EMPTY_FORM);
        setFormError('');
    };

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        const plainContent = stripHtml(blogForm.content);
        if (!blogForm.title.trim() || !plainContent) {
            setFormError('Title and content are required.');
            return;
        }

        setSubmitting(true);
        try {
            const isEditing = Boolean(editingId);
            const url = isEditing ? `/api/blog/${editingId}` : '/api/blog';
            const method = isEditing ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogForm),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || 'Failed to save blog post');
            }

            const savedBlog = await res.json();

            if (isEditing) {
                setBlogs((prev) => prev.map((b) => (b._id === savedBlog._id ? savedBlog : b)));
            } else {
                setBlogs((prev) => [savedBlog, ...prev]);
            }

            closeBlogForm();
        } catch (err) {
            setFormError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteBlog = async (id) => {
        const confirmed = typeof window !== 'undefined' && window.confirm('Delete this blog post? This cannot be undone.');
        if (!confirmed) return;

        setDeletingId(id);
        try {
            const res = await fetch(`/api/blog/${id}`, { method: 'DELETE' });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || 'Failed to delete blog post');
            }
            setBlogs((prev) => prev.filter((b) => b._id !== id));
            if (editingId === id) closeBlogForm();
        } catch (err) {
            alert(err.message || 'Failed to delete blog post');
        } finally {
            setDeletingId(null);
        }
    };

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

    const inputStyle = {
        width: '100%',
        padding: '10px 12px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        fontSize: '14px',
        color: '#0f172a',
        fontFamily: 'inherit',
        outline: 'none',
        boxSizing: 'border-box'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '13px',
        fontWeight: '600',
        color: '#334155',
        marginBottom: '6px'
    };

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
                <header style={{ marginBottom: '32px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                        <h2 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0', letterSpacing: '-0.025em' }}>
                            {sidebarItems.find(i => i.id === activeTab)?.label}
                        </h2>
                        <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                            Overview and management of incoming portal items.
                        </p>
                    </div>

                    {activeTab === 'blogs' && (
                        <button
                            onClick={() => (showBlogForm ? closeBlogForm() : openNewBlogForm())}
                            style={{
                                backgroundColor: showBlogForm ? '#f1f5f9' : '#0f172a',
                                color: showBlogForm ? '#0f172a' : '#ffffff',
                                border: 'none',
                                padding: '10px 18px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            {showBlogForm ? 'Cancel' : '+ New Blog Post'}
                        </button>
                    )}
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
                                                <td style={{ padding: '16px 24px', color: '#64748b', whiteSpace: 'nowrap' }}>
                                                    {sub.createdAt ? <SafeDateString ISOString={sub.createdAt} /> : 'N/A'}
                                                </td>
                                                <td style={{ padding: '16px 24px', fontWeight: '600', color: '#0f172a' }}>
                                                    {sub.fullName}
                                                </td>
                                                <td style={{ padding: '16px 24px', color: '#334155' }}>
                                                    {sub.businessName}
                                                </td>
                                                <td style={{ padding: '16px 24px' }}>
                                                    <div style={{ color: '#0f172a', fontWeight: '500' }}>{sub.category}</div>
                                                    <div style={{ fontSize: '12px', color: '#64748b' }}>{sub.city}</div>
                                                </td>
                                                <td style={{ padding: '16px 24px' }}>
                                                    <div style={{ color: '#0f172a' }}>{sub.email}</div>
                                                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{sub.phone}</div>
                                                </td>
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

                {activeTab === 'blogs' && (
                    <div>
                        {showBlogForm && (
                            <form
                                onSubmit={handleBlogSubmit}
                                style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    padding: '24px',
                                    marginBottom: '24px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px'
                                }}
                            >
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>
                                    {editingId ? 'Edit Blog Post' : 'New Blog Post'}
                                </h3>

                                <div>
                                    <label style={labelStyle}>Title</label>
                                    <input
                                        type="text"
                                        value={blogForm.title}
                                        onChange={(e) => handleBlogFormChange('title', e.target.value)}
                                        placeholder="Enter blog title"
                                        style={inputStyle}
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle}>Content</label>
                                    <RichTextEditor
                                        value={blogForm.content}
                                        onChange={(html) => handleBlogFormChange('content', html)}
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle}>Image URL <span style={{ fontWeight: '400', color: '#94a3b8' }}>(optional)</span></label>
                                    <input
                                        type="text"
                                        value={blogForm.image}
                                        onChange={(e) => handleBlogFormChange('image', e.target.value)}
                                        placeholder="https://example.com/image.jpg"
                                        style={inputStyle}
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle}>Author</label>
                                    <input
                                        type="text"
                                        value={blogForm.author}
                                        onChange={(e) => handleBlogFormChange('author', e.target.value)}
                                        placeholder="Admin"
                                        style={inputStyle}
                                    />
                                </div>

                                {formError && (
                                    <p style={{ color: '#dc2626', fontSize: '13px', margin: 0 }}>{formError}</p>
                                )}

                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        style={{
                                            backgroundColor: '#0f172a',
                                            color: '#ffffff',
                                            border: 'none',
                                            padding: '12px 20px',
                                            borderRadius: '8px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            cursor: submitting ? 'not-allowed' : 'pointer',
                                            opacity: submitting ? 0.6 : 1
                                        }}
                                    >
                                        {submitting ? 'Saving...' : editingId ? 'Save Changes' : 'Publish Post'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeBlogForm}
                                        style={{
                                            backgroundColor: '#f1f5f9',
                                            color: '#334155',
                                            border: 'none',
                                            padding: '12px 20px',
                                            borderRadius: '8px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}

                        {blogs.length === 0 ? (
                            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '48px', textAlign: 'center', border: '1px solid #e2e8f0', color: '#64748b' }}>
                                📝 No blog posts yet. Click "New Blog Post" to create one.
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {blogs.map((post) => (
                                    <div
                                        key={post._id}
                                        style={{
                                            backgroundColor: '#ffffff',
                                            borderRadius: '12px',
                                            border: '1px solid #e2e8f0',
                                            padding: '20px 24px'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
                                            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>
                                                {post.title}
                                            </h3>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <span style={{ fontSize: '12px', color: '#64748b', whiteSpace: 'nowrap' }}>
                                                    {post.createdAt ? <SafeDateString ISOString={post.createdAt} /> : ''}
                                                </span>
                                                <button
                                                    onClick={() => openEditBlogForm(post)}
                                                    style={{
                                                        border: '1px solid #e2e8f0',
                                                        backgroundColor: '#ffffff',
                                                        color: '#0f172a',
                                                        borderRadius: '6px',
                                                        padding: '6px 12px',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteBlog(post._id)}
                                                    disabled={deletingId === post._id}
                                                    style={{
                                                        border: '1px solid #fecaca',
                                                        backgroundColor: '#fef2f2',
                                                        color: '#dc2626',
                                                        borderRadius: '6px',
                                                        padding: '6px 12px',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        cursor: deletingId === post._id ? 'not-allowed' : 'pointer',
                                                        opacity: deletingId === post._id ? 0.6 : 1
                                                    }}
                                                >
                                                    {deletingId === post._id ? 'Deleting...' : 'Delete'}
                                                </button>
                                            </div>
                                        </div>
                                        <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#475569', lineHeight: '1.5' }}>
                                            {stripHtml(post.content).slice(0, 180)}...
                                        </p>
                                        <div style={{ marginTop: '10px', fontSize: '12px', color: '#94a3b8' }}>
                                            By {post.author || 'Admin'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
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