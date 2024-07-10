const path = require("path");
const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");

const { configs } = require("../configs");
const emailTemplates = require("../email-templates");
const { CustomError } = require("../errors");

module.exports = {
  sendMail: async (userMail = "", emailAction = "", context = {}) => {
    const transporter = nodemailer.createTransport({
      from: "No reply",
      auth: {
        user: configs.NO_REPLY_EMAIL,
        pass: configs.NO_REPLY_PASSWORD,
      },
      service: "gmail",
    });

    const hbsOptions = {
      viewsEngine: {
        extname: ".hbs",
        defaultLayout: "main",
        layoutDir: path.join(
          __dirname,

          // "src",
          "../",

          "email-templates"
          // "layouts"
        ),
        partialDir: path.join(
          __dirname,
          // "src",
          "../",

          "email-templates"
          // "partials"
        ),
      },
      viewPath: path.join(__dirname, "../", "email-templates"),
      extName: ".hbs",
    };

    transporter.use("compile", hbs(hbsOptions));

    const templateInfo = emailTemplates[emailAction];

    if (!templateInfo) {
      throw new CustomError("Wrong email action", 500);
    }

    context.frontendURL = configs.FRONTEND_URL;

    return transporter.sendMail({
      to: userMail,
      subject: templateInfo.subject,
      template: templateInfo.template,
      context,
    });
  },
};
