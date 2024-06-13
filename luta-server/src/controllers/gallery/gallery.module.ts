import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import { ProtectAuthMiddleware } from '../../middlewares/protect-auth.middleware';
import { Gallery } from '../../entity/gallery.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageService } from '../../services/image.service';
import { User } from '../../entity/user.entity';
import { AuthMiddlewareService } from '../../services/auth-middleware.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery, User])],
  controllers: [GalleryController],
  providers: [GalleryService, ImageService, AuthMiddlewareService],
})
export class GalleryModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProtectAuthMiddleware).forRoutes(
      {
        path: 'api/gallery-luta',
        method: RequestMethod.POST,
      },
      {
        path: 'api/gallery-luta/:id',
        method: RequestMethod.GET,
      },
      {
        path: 'api/gallery-luta/:id',
        method: RequestMethod.DELETE,
      },
      {
        path: 'api/gallery-luta/:id',
        method: RequestMethod.PUT,
      },
    );
  }
}
