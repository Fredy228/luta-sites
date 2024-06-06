import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import { ProtectAuthMiddleware } from '../../middlewares/protect-auth.middleware';
import { Gallery } from '../../entity/gallery.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageService } from '../../services/image.service';
import { AuthMiddlewareService } from '../../services/auth-middleware.service';
import { User } from '../../entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery, User])],
  controllers: [GalleryController],
  providers: [GalleryService, ImageService, AuthMiddlewareService],
})
export class GalleryModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProtectAuthMiddleware).forRoutes(
      {
        path: 'api/gallery',
        method: RequestMethod.POST,
      },
      {
        path: 'api/gallery',
        method: RequestMethod.GET,
      },
    );
  }
}
