// An array of routes that are accessible to the public

// These routes do not require auth

export const publicRoutes = [
    "/"
];

// An array of routes thar are used for authentication
// These routes will redirect logged in users to /settings

export const authRoutes = [
    "/auth/login",
    "/auth/register",
];


// The prefix for api authentication routes
// Routes that start with this prefix are used for API authentication purposes

export const apiAuthPrefix = "/api/auth";

//Default redirect after logging in

export const DEFAULT_LOGIN_REDIRECT = "/settings";