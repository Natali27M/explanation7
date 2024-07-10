const { emailActionTypeEnum } = require("../enums");

module.exports = {
  [emailActionTypeEnum.WELCOME]: {
    subject: "Welcome on board",
    template: "welcome",
  },

  [emailActionTypeEnum.FORGOT_PASSWORD]: {
    subject: "Ooops look like you forgot password",
    template: "forgot.password",
  },

  [emailActionTypeEnum.USER_BANNED]: {
    subject: "Account was blocked",
    template: "account-blocked",
  },
};
