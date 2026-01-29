import { useState, type FormEvent, type ChangeEvent } from 'react';

interface FormData {
    name: string;
    company: string;
    email: string;
    phone: string;
    companySize: string;
    message: string;
}

interface FormErrors {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        email: '',
        phone: '',
        companySize: '1-10',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Please provide more details (at least 10 characters)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error for this field
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus(null);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log('Demo request submitted:', formData);

            setSubmitStatus('success');
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                companySize: '1-10',
                message: '',
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="John Smith"
                    />
                    {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Company Field */}
                <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all outline-none ${errors.company ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="ABC Gas Distribution"
                    />
                    {errors.company && <p className="mt-1.5 text-sm text-red-600">{errors.company}</p>}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Business Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="john@company.com"
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Phone Field */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="+62 812-3456-7890"
                    />
                    {errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
                </div>
            </div>

            {/* Company Size */}
            <div>
                <label htmlFor="companySize" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Cylinders Managed
                </label>
                <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all outline-none"
                >
                    <option value="1-100">1 - 100 cylinders</option>
                    <option value="101-500">101 - 500 cylinders</option>
                    <option value="501-1000">501 - 1,000 cylinders</option>
                    <option value="1001-5000">1,001 - 5,000 cylinders</option>
                    <option value="5000+">5,000+ cylinders</option>
                </select>
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Needs *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all outline-none resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="Describe your current challenges with inventory tracking, distribution management, or any specific features you're looking for..."
                />
                {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Request...
                    </span>
                ) : (
                    'Request Free Demo'
                )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div className="p-5 bg-green-50 border-2 border-green-200 rounded-lg">
                    <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <p className="text-green-800 font-semibold">Thank you for your interest!</p>
                            <p className="text-green-700 text-sm mt-1">
                                Our team will contact you within 24 hours to schedule your personalized demo.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="p-5 bg-red-50 border-2 border-red-200 rounded-lg">
                    <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <p className="text-red-800 font-semibold">Oops! Something went wrong.</p>
                            <p className="text-red-700 text-sm mt-1">
                                Please try again or contact us directly at sales@ageniumtrack.com
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}
