import React, { useState } from 'react';

const Settings = () => {
    const [settings, setSettings] = useState({
        email: 'user@example.com',
        password: '',
        notifications: true,
        theme: 'light'
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Settings saved!');
        // Here you would typically update the settings in the database
    };

    return (
        <div className="container my-5">
            <h2>User Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={settings.password}
                        onChange={handleChange}
                        placeholder="Leave blank to keep the current password"
                    />
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="notifications"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="notifications">Enable Notifications</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="theme" className="form-label">Select Theme</label>
                    <select
                        id="theme"
                        name="theme"
                        className="form-select"
                        value={settings.theme}
                        onChange={handleChange}
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};

export default Settings;
