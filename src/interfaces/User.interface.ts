import { Passion } from "./Passion.interface";

export default interface User {
    id?: string | number;
    first_name?: string;
    hobby?: string;
    year?: Date | string;
    passion?: Passion | string
}
