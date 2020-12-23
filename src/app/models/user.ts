import { Optional } from "@angular/core";

export class User {
    id : string;
    rownumber : number;
    username : string;
    birthDate : Date;
    email : string;
    image : string;
    descp : string;
    password : string;
    role : string;

    constructor(id : string, username : string, birthDate : Date, email : string,
                password : string, role : string, rownumber : number,
                @Optional() image : string, @Optional() descp : string) {
        this.id = id;
        this.username = username;
        this.birthDate = birthDate;
        this.email = email;
        this.image = image;
        this.descp = descp;
        this.password = password;
        this.role = role;
        this.rownumber = rownumber;
    }

}
