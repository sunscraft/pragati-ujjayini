'use client'

import React, { useState } from 'react'
import { Phone, Mail, MessageSquare, MapPin, Clock, Check } from 'lucide-react'

const businessCategories = [
    'Retail',
    'Healthcare',
    'Restaurant',
    'Salon & Wellness',
    'Education',
    'Real Estate',
    'Home Services',
    'Other',
]

const helpOptions = [
    { id: 'gmb', label: 'GMB Optimization' },
    { id: 'seo', label: 'Local SEO' },
    { id: 'website', label: 'Website' },
    { id: 'smm', label: 'Social Media Marketing' },
    { id: 'graphics', label: 'Graphic Designing' },
    { id: 'ads', label: 'Google & Meta Ads' },
    { id: 'whatsapp', label: 'WhatsApp Marketing' },
    { id: 'listings', label: 'Local Listings (JustDial, Sulekha, IndiaMART)' },
    { id: 'not-sure', label: 'Not Sure Yet' },
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        category: '',
        city: '',
        phone: '',
        email: '',
        message: '',
    })
    const [selectedHelp, setSelectedHelp] = useState<string[]>([])

    const handleCheckboxChange = (id: string) => {
        setSelectedHelp((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const payload = {
            ...formData,
            servicesNeeded: selectedHelp
        }

        console.log("Sending data to backend:", payload)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            const data = await response.json()

            if (response.ok) {
                alert('Enquiry saved successfully!')
                setFormData({
                    fullName: '',
                    businessName: '',
                    category: '',
                    city: '',
                    phone: '',
                    email: '',
                    message: '',
                })
                setSelectedHelp([])
            } else {
                alert(`Error: ${data.message || 'Something went wrong'}`)
            }
        } catch (error) {
            console.error('Network Error:', error)
            alert('Failed to connect to the server.')
        }
    }

    return (
        <main className="mx-auto max-w-6xl px-5 sm:px-8 py-20 lg:py-28 w-full overflow-hidden select-none touch-pan-y bg-background text-foreground">
            {/* Header Info Block */}
            <div className="max-w-3xl mb-16">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                    Contact Us
                </p>
                <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-brand-navy">
                    Let&apos;s Grow Your Local Business Together
                </h1>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
                    Whether you&apos;re a retail store, a clinic, a restaurant, or any other local business — we&apos;re ready to help you get found, get chosen, and get more customers.
                </p>
            </div>

            {/* Main Structural Split Workspace */}
            <div className="grid gap-12 lg:grid-cols-12 items-start">
                {/* Left Interactive Workspace Side: Form Section */}
                <form onSubmit={handleSubmit} className="lg:col-span-7 bg-card border border-border p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Full Name</label>
                            <input
                                type="text" required
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand-orange text-foreground"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Business Name</label>
                            <input
                                type="text" required
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand-orange text-foreground"
                                value={formData.businessName}
                                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Business Category</label>
                            <select
                                required
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand-orange text-foreground"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option value="">Select a category</option>
                                {businessCategories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">City</label>
                            <input
                                type="text" required
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand-orange text-foreground"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Phone Number</label>
                            <input
                                type="tel" required
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand-orange text-foreground"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                            <input
                                type="email" required
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand-orange text-foreground"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Checkboxes Area */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">What do you need help with?</label>
                        <div className="grid gap-2.5 sm:grid-cols-2">
                            {helpOptions.map((option) => {
                                const isChecked = selectedHelp.includes(option.id)
                                return (
                                    <button
                                        type="button"
                                        key={option.id}
                                        onClick={() => handleCheckboxChange(option.id)}
                                        className={`flex items-start gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${isChecked
                                            ? 'border-brand-orange bg-brand-orange/5 text-brand-orange font-medium'
                                            : 'border-border bg-background text-foreground/80 hover:bg-muted/50'
                                            }`}
                                    >
                                        <div className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border transition-all ${isChecked ? 'border-brand-orange bg-brand-orange text-white' : 'border-muted-foreground/40'
                                            }`}>
                                            {isChecked && <Check className="size-3 stroke-[3]" />}
                                        </div>
                                        <span>{option.label}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Message (optional)</label>
                        <textarea
                            rows={4}
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand-orange resize-none text-foreground"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-brand-orange text-white py-3.5 px-6 font-heading font-bold text-sm tracking-wide transition-all shadow-sm shadow-brand-orange/10 hover:bg-brand-orange/90 active:scale-[0.99]"
                    >
                        Send My Enquiry
                    </button>
                </form>

                {/* Right Info Presentation Column Panel */}
                <div className="lg:col-span-5 space-y-6 lg:pl-4">
                    {/* FIXED: Changed bg-muted/40 to clean absolute solid bg-card & border layout matching PC paneling */}
                    <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
                        <h3 className="font-heading text-lg font-bold text-brand-navy">Other Ways To Reach Us</h3>

                        <div className="space-y-4">
                            <a href="tel:+919202668977" className="flex items-center gap-4 p-3 rounded-2xl border border-border bg-background shadow-sm group transition-all hover:border-brand-orange/40">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                                    <Phone className="size-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Phone</p>
                                    <p className="text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">+919202668977</p>
                                </div>
                            </a>

                            <a href="mailto:pragatiujjayini@gmail.com" className="flex items-center gap-4 p-3 rounded-2xl border border-border bg-background shadow-sm group transition-all hover:border-brand-blue/40">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                                    <Mail className="size-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email</p>
                                    <p className="text-sm font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">pragatiujjayini@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://wa.me/9202668977" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-2xl border border-border bg-background shadow-sm group transition-all hover:border-green-500/40">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                                    <MessageSquare className="size-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                                    <p className="text-sm font-semibold text-brand-navy group-hover:text-green-600 transition-colors">Chat With Us</p>
                                </div>
                            </a>

                            {/* FIXED: Standardized card formatting to match parent items instead of unstyled img-card class */}
                            <div className="flex items-center gap-4 p-3 rounded-2xl border border-border bg-background shadow-sm">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                                    <MapPin className="size-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Location</p>
                                    <p className="text-sm font-semibold text-brand-navy">1st Floor, Mahakal Vanijya Kendra, Nanakheda, Ujjain.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office Hours Side Panel Card */}
                    <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 flex items-start gap-4 shadow-sm">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                            <Clock className="size-4" />
                        </div>
                        <div>
                            <h4 className="font-heading text-sm font-bold text-brand-navy">Office Hours</h4>
                            <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-normal">
                                <strong className="text-brand-navy">Monday – Saturday:</strong> 10:00 AM – 7:00 PM
                            </p>
                            <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-normal">
                                <strong>Sunday:</strong> Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}