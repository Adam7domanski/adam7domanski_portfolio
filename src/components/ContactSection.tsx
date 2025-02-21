import React, { useState } from 'react';
import styles from '../styles/ContactSection.module.css';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        budget: '',
        message: ''
    });

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;
        let newErrors = { name: '', email: '', budget: '', message: '' };

        if (!formData.name) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
            valid = false;
        }

        if (!formData.budget) {
            newErrors.budget = 'Budget selection is required';
            valid = false;
        }

        if (!formData.message) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            // Forward the submitted details to the specified email
            window.location.href = `mailto:adam7domanski@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ABudget: ${formData.budget}%0D%0AMessage: ${formData.message}`;
        }
    };

    return (
        <div className={styles.contactContainer}>
            <h2 className={styles.contactTitle}>Let's Work Together</h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? styles.errorInput : ''}
                    />
                    {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? styles.errorInput : ''}
                    />
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="budget">Budget</label>
                    <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={errors.budget ? styles.errorInput : ''}
                    >
                        <option value="">Select your budget</option>
                        <option value="<1000$">&lt;1000$</option>
                        <option value="1000-3000$">1000-3000$</option>
                        <option value=">3000$">&gt;3000$</option>
                    </select>
                    {errors.budget && <p className={styles.errorText}>{errors.budget}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? styles.errorInput : ''}
                    ></textarea>
                    {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                </div>
                <button type="submit" className={styles.submitButton}>Send</button>
            </form>
        </div>
    );
}