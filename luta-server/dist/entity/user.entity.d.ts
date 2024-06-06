export declare class User {
    id: number;
    username: string;
    password: string;
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
