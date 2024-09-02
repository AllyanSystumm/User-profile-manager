class UserProfile {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(value) {
        if (value.length > 0) {
            this._name = value;
        } else {
            console.error('Name cannot be empty.');
        }
    }

    // Getter for email
    get email() {
        return this._email;
    }

    // Setter for email
    set email(value) {
        if (this.validateEmail(value)) {
            this._email = value;
        } else {
            console.error('Invalid email address.');
        }
    }

    // Validate email address
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

class ProfileManager {
    constructor() {
        this.profile = new UserProfile('John Doe', 'john.doe@example.com');
        this.initialize();
    }

    initialize() {
        this.updateDisplay();

        document.getElementById('updateProfile').addEventListener('click', () => this.updateProfile());
    }

    updateProfile() {
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;

        this.profile.name = name;
        this.profile.email = email;

        this.updateDisplay();
    }

    updateDisplay() {
        document.getElementById('nameDisplay').textContent = this.profile.name;
        document.getElementById('emailDisplay').textContent = this.profile.email;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProfileManager();
});
