module.exports = {
  PASSWORD_REGEX : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/,
  EMAIL_REGEX : /^([^,@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/,

  AUTHORIZATION : 'Authorization',
};
