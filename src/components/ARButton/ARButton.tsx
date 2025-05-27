import React from 'react';
import './ARButton.css';

export interface ARButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode?: 'start' | 'stop';
    isActive?: boolean;
}

export const ARButton: React.FC<ARButtonProps> = ({
    mode = 'start',
    isActive = false,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`ar-ar-button ${isActive ? 'ar-ar-button-active' : ''} ${className}`}
            {...props}
        >
            <div className="ar-ar-button-content">
                <div className="ar-ar-button-icon">
                    {mode === 'start' ? (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" fill="currentColor" />
                        </svg>
                    )}
                </div>
                <span className="ar-ar-button-text">
                    {mode === 'start' ? 'Start AR' : 'Stop AR'}
                </span>
            </div>
        </button>
    );
};

export default ARButton; 