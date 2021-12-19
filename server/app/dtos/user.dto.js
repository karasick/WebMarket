module.exports = class UserDTO {
    constructor(model) {
        this.id = model.id;
        this.email = model.email;
        this.role = model.role;
    }
}