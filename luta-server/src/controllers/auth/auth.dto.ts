export abstract class BaseAuthDto {
  username: string;
  password: string;
}

export class LoginAuthDto extends BaseAuthDto {}

export class RegisterAuthDto extends BaseAuthDto {
  secret_string: string;
}
