import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
    (response) => {
        // Return successful responses as-is
        return response;
    },
    (error) => {
        // Handle different types of errors
        if (error.response) {
            // Server responded with error status
            const { status, data } = error.response;
            
            switch (status) {
                case 400:
                    console.error('Bad Request:', data.message || 'Invalid request');
                    break;
                case 404:
                    console.error('Not Found:', data.message || 'Resource not found');
                    break;
                case 409:
                    console.error('Conflict:', data.message || 'Resource conflict');
                    break;
                case 500:
                    console.error('Server Error:', data.message || 'Internal server error');
                    break;
                default:
                    console.error(`Error ${status}:`, data.message || 'Unknown error');
            }
        } else if (error.request) {
            // Network error
            console.error('Network Error:', 'No response received from server');
        } else {
            // Request setup error
            console.error('Request Error:', error.message);
        }
        
        return Promise.reject(error);
    }
);
    