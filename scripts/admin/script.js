class Buttons {
    constructor() {
        this.class = "buttons";
        // Bind methods to ensure 'this' refers to the class instance
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    configurateButton() {
        $(`.${this.class}`)
            .on("click", this.onClick)
            .on("mouseenter", this.onMouseEnter)
            .on("mouseleave", this.onMouseLeave);
    }

    onMouseEnter(event) {
        $(event.currentTarget).addClass("isHovered");
    }

    onMouseLeave(event) {
        $(event.currentTarget).removeClass("isHovered");
    }

    onClick(event) {
        $(event.currentTarget)
            .off("mouseenter", this.onMouseEnter)
            .off("mouseleave", this.onMouseLeave)
            .addClass("isHovered")
            .addClass("isClicked");

        setTimeout(() => {
            $(event.currentTarget)
                .removeClass("isHovered")
                .removeClass("isClicked");
            this.configurateButton();
        }, 1300);
    }

    checkInputs(inputsList) {
        return !inputsList.some((value) => value === "");
    }
}

class LogInButton extends Buttons {
    constructor() {
        super();
        this.id = "logIn";
        this.logIn = this.logIn.bind(this);
        this.configurateButton();
        $(`#${this.id}`).on("click", this.logIn);
    }

    logIn() {
        $(".result").html("").removeClass("falseResult").removeClass("trueResult");
        const username = $("#username").val();
        const password = $("#password").val();
        setTimeout(() => {
            if (this.checkInputs([username, password])) {
                $.ajax({
                    type: "post",
                    url: "http://localhost/projects/project/php/admin/logIn.php",
                    data: `username=${username}&password=${password}`,
                    success: (data) => {
                        if (data.indexOf("success") !== -1) {
                            $(".result")
                                .addClass("trueResult")
                                .html("You log in successfuly :)")
                                .css("color", "green");
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
                                `There is an error xmlHtppRequest has failed :/`
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

class createAcountButton extends Buttons {
    constructor() {
        super();
        this.id = "createAcount";
        this.createAcount = this.createAcount.bind(this);
        this.configurateButton();
        $(`#${this.id}`).on("click", this.createAcount);
    }

    createAcount() {
        $(".result")
            .html("")
            .removeClass("falseResult")
            .removeClass("trueResult");
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const username = $("#username").val();
        const password = $("#password").val();
        setTimeout(() => {
            if (this.checkInputs([firstName, lastName, username, password])) {
                $.ajax({
                    type: "post",
                    url: "http://localhost/projects/project/php/admin/createAcount.php",
                    data: `firstname=${firstName}&lastname=${lastName}&username=${username}&password=${password}`,
                    success: (data) => {
                        if (data.indexOf("success") !== -1) {
                            $(".result")
                                .addClass("trueResult")
                                .html("You log in successfuly :)");
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
                                `There is an error xmlHtppRequest has failed :/`
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
    constructor(id, html) {
        this.id = id;
        this.html = html;
        this.setButton(this.id, this.html);
    }
    setButton(Class, html) {
        $(".result")
            .html("")
            .removeClass("falseResult")
            .removeClass("trueResult");
        $(`.${Class}`).on("click", () => {
            $(".inputs-container").html(html);
            if (Class === "youWannaCreateAcount") {
                let resolution1500 = new Resolution(1500);
                $(window).on("resize", () => {
                    let resolution1500 = new Resolution(1500);
                });
                $(".areNew").html(
                    `If you already have an acount go to <a class="youWannaLogIn">Log In</a>`
                );
                const wannaLogIn = new changeModeButtons(
                    "youWannaLogIn",
                    logInhtml
                );
                const createAcount = new createAcountButton();
            } else {
                let resolution815 = new Resolution(815);
                $(window).on("resize", () => {
                    let resolution815 = new Resolution(815);
                });

                $(".areNew").html(
                    `If you are new you can <a class="youWannaCreateAcount">Create Acount</a>`
                );
                const wannaCreateAcount = new changeModeButtons(
                    "youWannaCreateAcount",
                    createAcounthtml
                );
                const logIn = new LogInButton();
            }
        });
    }
}
class Resolution {
    constructor(widthValue) {
        this.checkResolution(widthValue);
    }
    checkResolution(value) {
        if (window.innerWidth < value) {
            $(".inputs-container").addClass("inputs-container-Exeption");
            $(".input-container").addClass("input-container-Exeption");
            $(".inputs").addClass("inputs-Exeption");
        } else {
            $(".inputs-container").removeClass("inputs-container-Exeption");
            $(".input-container").removeClass("input-container-Exeption");
            $(".inputs").removeClass("inputs-Exeption");
        }
    }
}
let resolution = new Resolution(815);
$(window).on("resize", () => {
    resolution = new Resolution(815);
});
const wannaLogIn = new changeModeButtons(
    "youWannaCreateAcount",
    createAcounthtml
);

const logIn = new LogInButton();
