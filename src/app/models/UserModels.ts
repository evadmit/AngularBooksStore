export class User{
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;

}

export class LoginUser{
    email: string;
    password: string;
}

export enum Role {
    admin  = 1,
    client,
    author
}