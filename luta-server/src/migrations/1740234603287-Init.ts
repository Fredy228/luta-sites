import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1740234603287 implements MigrationInterface {
    name = 'Init1740234603287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(100) NOT NULL, \`password\` varchar(250) NOT NULL, \`login_attempts\` int NULL, \`login_time\` timestamp NULL, \`isBlock\` tinyint NOT NULL DEFAULT 0, \`createAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updateAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_devices\` (\`id\` int NOT NULL AUTO_INCREMENT, \`deviceModel\` varchar(100) NULL, \`createAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updateAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`accessToken\` varchar(250) NOT NULL, \`refreshToken\` varchar(250) NOT NULL, \`userIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sms_order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(250) NOT NULL, \`name\` varchar(100) NOT NULL, \`phone\` varchar(50) NOT NULL, \`message\` varchar(500) NULL, \`file\` longtext NULL, \`site\` enum ('luta-pro', 'stair-furniture') NOT NULL, \`createAt\` date NOT NULL DEFAULT CURRENT_DATE, \`create_row\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gallery\` (\`id\` int NOT NULL AUTO_INCREMENT, \`path\` varchar(500) NOT NULL, \`type\` enum ('rezba', 'plazma', 'last-works', 'frezerovka', '3dpanel') NOT NULL, \`site\` enum ('luta-pro', 'stair-furniture') NOT NULL, \`title\` varchar(250) NOT NULL, \`createAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updateAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` ADD CONSTRAINT \`FK_e8c06fe9dccafc5240577b3c34c\` FOREIGN KEY (\`userIdId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_devices\` DROP FOREIGN KEY \`FK_e8c06fe9dccafc5240577b3c34c\``);
        await queryRunner.query(`DROP TABLE \`gallery\``);
        await queryRunner.query(`DROP TABLE \`sms_order\``);
        await queryRunner.query(`DROP TABLE \`user_devices\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
