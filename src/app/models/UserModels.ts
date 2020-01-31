export class User{
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;

}

export enum Role {
    admin,
    client,
    author
}