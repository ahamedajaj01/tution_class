import { useState, useRef } from 'react';
import { Calendar, Clock, User, Mail, Phone, BookOpen, MessageSquare, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ==========================================
// CONFIGURATION (Using Environment Variables)
// ==========================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_COMPANY = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COMPANY;
const EMAILJS_TEMPLATE_ID_PARENT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PARENT;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const COMPANY_RECEIVER_EMAIL = import.meta.env.VITE_COMPANY_RECEIVER_EMAIL;

const BookNow = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        studentYear: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // 1. Send Notification to Company
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID_COMPANY,
                {
                    name: formData.name,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                    from_email: formData.email,
                    parent_email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    to_email: COMPANY_RECEIVER_EMAIL,
                },
                EMAILJS_PUBLIC_KEY
            );

            // 2. Send Confirmation to Parent (Auto-reply) - Optional skip if ID is placeholder
            if (EMAILJS_TEMPLATE_ID_PARENT && EMAILJS_TEMPLATE_ID_PARENT !== "YOUR_PARENT_TEMPLATE_ID") {
                try {
                    await emailjs.send(
                        EMAILJS_SERVICE_ID,
                        EMAILJS_TEMPLATE_ID_PARENT,
                        {
                            // Sending multiple variations to ensure it matches your dashboard setting
                            name: formData.name,
                            title: "Free Assessment",
                            to_email: formData.email,
                            email: formData.email,
                            parent_email: formData.email,
                            to_name: formData.name,
                        },
                        EMAILJS_PUBLIC_KEY
                    );
                } catch (parentErr) {
                    console.error("Parent auto-reply failed, but company notification was sent.", parentErr);
                }
            }

            setSubmitted(true);
        } catch (error) {
            // Simulating success only for development mode if keys aren't set up
            if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || error.status === 400) {
                alert("Email setup incomplete. Please check your .env file and Restart the Server.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white font-sans text-slate-900">

            {/* 1. Hero Section */}
            <section className="bg-[#004047] py-24 px-6 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="inline-block bg-[#2ecc71] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        Get Started Today
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        Book Your Free <br />
                        <span className="text-[#2ecc71]">Assessment</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                        Take the first step towards academic excellence. Sign up for a free,
                        no-obligation trial lesson or assessment at Leafclutch Technologies.
                    </p>
                </div>
            </section>

            {/* 2. Main Booking Area */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Contact Info & Benefits */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-[#004047] mb-6">Why book a trial?</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: <User className="text-[#2ecc71]" />, t: "Personal Consultation", d: "Meet our tutors and discuss your child's specific academic goals." },
                                    { icon: <BookOpen className="text-[#2ecc71]" />, t: "Skill Assessment", d: "We'll identify strengths and areas for improvement in key subjects." },
                                    { icon: <Clock className="text-[#2ecc71]" />, t: "Experience the Method", d: "See our engaging, inquiry-based learning approach in action." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 bg-[#f4fafa] rounded-xl flex items-center justify-center flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#004047]">{item.t}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#f4fafa] p-8 rounded-3xl border border-white shadow-sm">
                            <h3 className="text-xl font-bold text-[#004047] mb-6">Contact Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-slate-600">
                                    <Mail size={18} className="text-[#2ecc71]" />
                                    <span>info@leafclutch.com.np</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-600">
                                    <Phone size={18} className="text-[#2ecc71]" />
                                    <span>+977 980-0000000</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-600">
                                    <MapPin size={18} className="text-[#2ecc71]" />
                                    <span>Bhairahawa, Nepal</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Form */}
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 relative">
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 bg-[#eefdf3] text-[#2ecc71] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#004047] mb-4">Request Sent!</h3>
                                <p className="text-slate-500">
                                    Thank you for reaching out. A member of the Leafclutch team will
                                    contact you within 24 hours to confirm your booking.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-[#2ecc71] font-bold hover:underline"
                                >
                                    Send another request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Parent Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input
                                                required
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#2ecc71] focus:bg-white transition-all"
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input
                                                required
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#2ecc71] focus:bg-white transition-all"
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input
                                                required
                                                type="tel"
                                                placeholder="07123 456789"
                                                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#2ecc71] focus:bg-white transition-all"
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Subject(s) of Interest</label>
                                    <div className="relative">
                                        <BookOpen className="absolute left-4 top-4 text-slate-300" size={18} />
                                        <input
                                            type="text"
                                            placeholder="e.g. Maths and English"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#2ecc71] focus:bg-white transition-all"
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Additional Message</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 text-slate-300" size={18} />
                                        <textarea
                                            rows="4"
                                            placeholder="Tell us about your child's needs..."
                                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#2ecc71] focus:bg-white transition-all resize-none"
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#2ecc71] text-white py-5 rounded-xl font-bold text-lg shadow-xl hover:bg-[#27ae60] transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={24} className="animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Confirm Registration
                                            <Calendar size={20} />
                                        </>
                                    )}
                                </button>
                                <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">
                                    Secure & Confidential Registration
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* 3. Map / Location Placeholder */}
            <section className="py-20 bg-[#f4fafa]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="h-96 bg-slate-200 rounded-3xl overflow-hidden relative group">
                        <img
                            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            alt="Location"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#2ecc71] rounded-full flex items-center justify-center text-white">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#004047]">Our Center</h4>
                                    <p className="text-xs text-slate-500">Bhairahawa, Nepal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#004047] mb-6">Visit Our Center</h2>
                        <p className="text-slate-500 leading-relaxed mb-8 text-lg">
                            We are conveniently located in Bhairahawa, making it easy for students from
                            and surrounding areas to attend our in-person sessions. Our modern facility is
                            designed to provide a calm and focused learning environment.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h5 className="font-bold text-[#004047] mb-2">Opening Hours</h5>
                                <p className="text-sm text-slate-500">Sun - Fri: 10:00 AM - 6:00 PM</p>
                                <p className="text-sm text-slate-500">Sat - Sun: 10:00 AM - 4:00 PM</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-[#004047] mb-2">Support</h5>
                                <p className="text-sm text-slate-500">Available 24/7 via Email</p>
                                <p className="text-sm text-slate-500">Phone during center hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};


export default BookNow;
