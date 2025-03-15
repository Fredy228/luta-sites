import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateGallaryType1741788312382 implements MigrationInterface {
    name = 'UpdateGallaryType1741788312382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sms_order\` CHANGE \`message\` \`message\` varchar(500) NULL`);
        await queryRunner.query(`ALTER TABLE \`sms_order\` CHANGE \`file\` \`file\` longtext NULL`);
        await queryRunner.query(`ALTER TABLE \`sms_order\` CHANGE \`createAt\` \`createAt\` date NOT NULL DEFAULT CURRENT_DATE`);
        await queryRunner.query(`ALTER TABLE \`sms_order\` CHANGE \`create_row\` \`create_row\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`login_attempts\` \`login_attempts\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`login_time\` \`login_time\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createAt\` \`createAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updateAt\` \`updateAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` DROP FOREIGN KEY \`FK_e8c06fe9dccafc5240577b3c34c\``);
        await queryRunner.query(`ALTER TABLE \`user_devices\` CHANGE \`deviceModel\` \`deviceModel\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` CHANGE \`createAt\` \`createAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` CHANGE \`updateAt\` \`updateAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` CHANGE \`userIdId\` \`userIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`gallery\` CHANGE \`type\` \`type\` enum ('rezba', 'plazma', 'last-works', 'frezerovka', '3dpanel', 'laser-cutting', 'mirror-frames', 'forging', 'industrial', 'braziers', 'metal', 'stairs', 'letters', 'loft', 'goal', 'railing', 'metaldecor', 'aluminum', 'brass', 'metalcutting', 'decormetal', 'furniture') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`gallery\` CHANGE \`createAt\` \`createAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`gallery\` CHANGE \`updateAt\` \`updateAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` ADD CONSTRAINT \`FK_e8c06fe9dccafc5240577b3c34c\` FOREIGN KEY (\`userIdId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_devices\` DROP FOREIGN KEY \`FK_e8c06fe9dccafc5240577b3c34c\``);
        await queryRunner.query(`ALTER TABLE \`gallery\` CHANGE \`updateAt\` \`updateAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`gallery\` CHANGE \`createAt\` \`createAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`gallery\` CHANGE \`type\` \`type\` enum ('rezba', 'plazma', 'last-works', 'frezerovka', '3dpanel', 'laser-cutting', 'mirror-frames') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` CHANGE \`userIdId\` \`userIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` CHANGE \`updateAt\` \`updateAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` CHANGE \`createAt\` \`createAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` CHANGE \`deviceModel\` \`deviceModel\` varchar(100) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user_devices\` ADD CONSTRAINT \`FK_e8c06fe9dccafc5240577b3c34c\` FOREIGN KEY (\`userIdId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updateAt\` \`updateAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createAt\` \`createAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`login_time\` \`login_time\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`login_attempts\` \`login_attempts\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`sms_order\` CHANGE \`create_row\` \`create_row\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`sms_order\` CHANGE \`createAt\` \`createAt\` date NOT NULL DEFAULT 'curdate()'`);
        await queryRunner.query(`ALTER TABLE \`sms_order\` CHANGE \`file\` \`file\` longtext NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`sms_order\` CHANGE \`message\` \`message\` varchar(500) NULL DEFAULT 'NULL'`);
    }

}
