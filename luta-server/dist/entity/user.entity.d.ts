export declare class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    createAt: Date;
    updateAt: Date;
    devices: UserDevices[];
}
export declare class UserDevices {
    id: number;
    deviceModel: string;
    createAt: Date;
    updateAt: Date;
    accessToken: string;
    refreshToken: string;
    userId: User;
}
