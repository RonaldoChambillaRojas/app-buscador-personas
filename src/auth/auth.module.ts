import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { Persona, TipoDocumentoIdentidad, TipoPersona } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPersona, TipoDocumentoIdentidad, Persona]),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
