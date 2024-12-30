const normalizeCredentials = (credentials) => ({
    displayName: credentials.displayName,
    email: credentials.email,
    birthDate: credentials.birthDate,
    password: credentials.password,
});

export default normalizeCredentials;