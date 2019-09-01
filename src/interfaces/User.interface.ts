import Hobby from "./Hobby.interface";

export default interface User {
    id?: string | number;
    first_name?: string;
    hobbies?: Array<Hobby>
}

