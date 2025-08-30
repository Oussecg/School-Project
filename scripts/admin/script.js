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
        }, 1100);
    }
}

class LogInButton extends Buttons {
    constructor() {
        super();
        this.id = "logIn";
        this.configurateButton();
        $(`#${this.id}`).on("click", this.logIn)
    }

    logIn() {
        $.ajax({
            type: "post",
            url: "",
            data: ``,
            success: (data)=>{}
        })
    }
}

class createAcountButton extends Buttons {
    constructor() {
        super();
        this.id = "createAcount";
        this.configurateButton();
    }
}

const logIn = new LogInButton();
