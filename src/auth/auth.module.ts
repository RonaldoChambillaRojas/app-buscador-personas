import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { TipoPersona } from './entities/tipo-persona.entity';
import { TipoDocumento } from './entities/tipo-documento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPersona, TipoDocumento]),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
