// Use relative URL to work with Vite proxy (works on mobile when accessing dev server)
// In production, set VITE_API_URL environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Add email to waitlist
 * @param {string} email - User's email address
 * @param {string} userType - 'employer' or 'applicant'
 * @param {string} companyName - Optional company name (for employers)
 * @returns {Promise<Object>} Response from API
 */
export async function addToWaitlist(email, userType, companyName = null) {
    try {
        const response = await fetch(`${API_BASE_URL}/waitlist/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                userType,
                companyName,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to add to waitlist');
        }

        return data;
    } catch (error) {
        console.error('Error adding to waitlist:', error);
        throw error;
    }
}

/**
 * Check if email exists in waitlist
 * @param {string} email - Email to check
 * @returns {Promise<Object>} Response indicating if email exists
 */
export async function checkEmail(email) {
    try {
        const response = await fetch(`${API_BASE_URL}/waitlist/check/${encodeURIComponent(email)}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error checking email:', error);
        throw error;
    }
}

/**
 * Get waitlist statistics
 * @returns {Promise<Object>} Statistics about the waitlist
 */
export async function getWaitlistStats() {
    try {
        const response = await fetch(`${API_BASE_URL}/waitlist/stats`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching stats:', error);
        throw error;
    }
}

