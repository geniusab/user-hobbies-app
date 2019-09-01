import { Passion } from "./Passion.interface";

export default interface Hobby {
    hobby?: string;
    year?: Date | string;
    passion?: Passion | string
}


