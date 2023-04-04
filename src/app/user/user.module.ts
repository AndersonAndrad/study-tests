import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [UserService],
})
export class UserModule {}
