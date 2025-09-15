import { Buttons } from "../classes/button.js";
import { CheckSession } from "../classes/checkSession.js";
import { Operations } from "../classes/operation.js";
import { Resolution } from "../classes/resolution.js";
import {
    createAccountHtml,
    logInHtml,
    tableRequestConfirmHtml,
} from "./html.js";

// todo: we have to display a message when you clicked on create account or log in and the inputs is null
class LogInButton extends Buttons {
    constructor() {
        super();
        this.operation = operations;
        this.id = "logIn";
        this.logIn = this.logIn.bind(this);
        $(`#${this.id}`).on("click", this.logIn);
    }

    logIn() {
        $(".result")
            .html("")
            .removeClass("falseResult")
            .removeClass("trueResult");
        const username = $("#username").val();
        const password = $("#password").val();
        setTimeout(() => {
            if (this.operation.checkInputs([username, password])) {
                $.ajax({
                    type: "post",
                    url: "http://localhost/projects/project/php/admin/logIn.php",
                    data: `username=${username}&password=${password}`,
                    success: (data) => {
                        if (data.indexOf("success") !== -1) {
                            $(".result")
                                .addClass("trueResult")
                                .html("You log in successfully :)");
                            this.operation.showRequestTable();
                        } else {
                            $(".result")
                                .addClass("falseResult")
                                .html(`Error: ${data}`);
                        }
                    },
                    error: () => {
                        $(".result")
                            .addClass("falseResult")
                            .html(
                                `There is an error xmlHttpRequest has failed :/`
                            );
                    },
                });
            } else {
                $(".result")
                    .addClass("falseResult")
                    .html(`Fill the inputs fields !`);
            }
        }, 1300);
    }
}

class createAccountButton extends Buttons {
    constructor() {
        super();
        this.operation = new Operations(tableRequestConfirmHtml);
        this.id = "createAccount";
        this.createAccount = this.createAccount.bind(this);
        this.configureButton();
        $(`#${this.id}`).on("click", this.createAccount);
    }

    createAccount() {
        $(".result")
            .html("")
            .removeClass("falseResult")
            .removeClass("trueResult");
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const username = $("#username").val();
        const password = $("#password").val();
        setTimeout(() => {
            if (
                this.operation.checkInputs([
                    firstName,
                    lastName,
                    username,
                    password,
                ])
            ) {
                $.ajax({
                    type: "post",
                    url: "http://localhost/projects/project/php/admin/createAccount.php",
                    data: `firstName=${firstName}&lastName=${lastName}&username=${username}&password=${password}`,
                    success: (data) => {
                        if (data.indexOf("success") !== -1) {
                            $(".result")
                                .addClass("trueResult")
                                .html("You log in successfully :)");
                            this.operation.showRequestTable();
                        } else {
                            $(".result")
                                .addClass("falseResult")
                                .html(`Error: ${data}`);
                        }
                    },
                    error: () => {
                        $(".result")
                            .addClass("falseResult")
                            .html(
                                `There is an error xmlHttpRequest has failed :/`
                            );
                    },
                });
            } else {
                $(".result")
                    .addClass("falseResult")
                    .html(`Fill the inputs fields !`);
            }
        }, 1100);
    }
}

class changeModeButtons {
    constructor(Class, html) {
        this.class = Class;
        this.html = html;
        this.operation = operations;
        this.setButton = this.setButton.bind(this);
    }

    setButton() {
        // remove result classes
        $(".result")
            .html("")
            .removeClass("falseResult")
            .removeClass("trueResult");

        // check if create account or log in is clicked so we can switch the html of inputs-container
        $(`.${this.class}`).on("click", () => {
            $(".inputs-container").html(this.html);
            if (this.class === "youWannaCreateAccount") {
                resolution.checkResolution(1500);
                resolution.checkResolutionResize(1500);
                $(".areNew").html(
                    `If you already have an account go to <a class="youWannaLogIn">Log In</a>`
                );
                createAccount.configureButton();
                wannaLogIn.setButton();
            } else {
                // check resolution
                resolution.checkResolution(815);
                resolution.checkResolutionResize(815);
                // change the content of are New
                $(".areNew").html(
                    `If you are new you can <a class="youWannaCreateAccount">Create Account</a>`
                );
                // configure buttons for functionality
                logIn.configureButton();
                wannaCreateAccount.setButton();
            }
        });
    }
}

// this 3 lines is for
const resolution = new Resolution();
resolution.checkResolution(815);
resolution.checkResolutionResize(815);

// load operations
const operations = new Operations(tableRequestConfirmHtml);

const checkSession = new CheckSession(operations);
checkSession.checkSession();

const wannaLogIn = new changeModeButtons("youWannaLogIn", logInHtml);
const wannaCreateAccount = new changeModeButtons(
    "youWannaCreateAccount",
    createAccountHtml
);

const logIn = new LogInButton();
const createAccount = new createAccountButton();

wannaCreateAccount.setButton();
logIn.configureButton();
