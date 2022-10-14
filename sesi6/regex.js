// validate password with 1 uppercase, 1 lowercase, 1 number, 1 special character, and 8-12 characters
function validatePassword(password) {
    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,12})/;
    return regex.test(password);
}
