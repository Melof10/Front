const errorMinCharacters = (character) => {
    return `This field must have a minimum of ${character} characters`;
}

module.exports = {
    /***** BASE URL *****/
    API_URL: 'http://localhost:3000',

    /***** ROUTE for request *****/
    LOGIN: 'users',
    REFRESH_ACCESS_TOKEN: 'refresh-access-token',

    /***** METHOD for request *****/
    REQUEST_METHOD_GET: 'GET',
    REQUEST_METHOD_POST: 'POST',
    REQUEST_METHOD_PATCH: 'PATCH',

    /***** MESSAGES *****/
    errorMinCharacters,
    REQUIRED: 'Required',
    EMAIL_INVALID: 'Invalid email',
    LOGIN_INCORRECT: 'User or Password incorrect',

    /***** TOKEM *****/
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken',
}