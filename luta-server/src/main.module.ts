import { Module } from '@nestjs/common';
import * as process from 'process';
import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
import databaseConfig from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './controllers/auth/auth.module';
import { GalleryModule } from './controllers/gallery/gallery.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
    AuthModule,
    GalleryModule,
  ],
})
export class MainModule {}
