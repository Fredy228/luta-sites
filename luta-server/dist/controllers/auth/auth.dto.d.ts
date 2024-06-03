export declare abstract class BaseAuthDto {
    email: string;
    password: string;
}
export declare class LoginAuthDto extends BaseAuthDto {
}
export declare class RegisterAuthDto extends BaseAuthDto {
    firstName: string;
}
