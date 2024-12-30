const normalizeCredentials = (credentials) => ({
    displayName: credentials.displayName,
    email: credentials.email,
    password: credentials.password,
});

export default normalizeCredentials;