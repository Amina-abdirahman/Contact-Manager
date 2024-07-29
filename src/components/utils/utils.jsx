export const emailValidator = email => {
    return /\S+@\S+\.\S+/.test(email);
};

export const phoneValidator = phone => {
    return /^\d{10}$/.test(phone);  // Simple US phone number validation
};
