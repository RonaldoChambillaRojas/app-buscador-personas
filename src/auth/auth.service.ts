import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Repository } from 'typeorm';
import { Persona } from './entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {

  constructor (
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {} 


  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAllUsers(term: string) {
  if (!term || term.trim() === '') {
    return [];
  }

  // Dividir el término en palabras individuales
  const words = term.trim().split(/\s+/);
  const queryBuilder = this.personaRepository
    .createQueryBuilder('persona')
    .select([
      'persona.idPersona',
      'persona.nombreCompleto',
      'persona.apellidoCompleto',
      'persona.razonSocial',
      'persona.numeroDocumentoIdentidad'
    ]);

  // Buscar cada palabra en todos los campos
  words.forEach((word, index) => {
    const paramName = `term${index}`;
    const searchTerm = `%${word}%`;
    
    const condition = `
      (UPPER(persona.nombreCompleto) LIKE UPPER(:${paramName}) OR
       UPPER(persona.apellidoCompleto) LIKE UPPER(:${paramName}) OR
       UPPER(persona.razonSocial) LIKE UPPER(:${paramName}) OR
       persona.numeroDocumentoIdentidad LIKE :${paramName})
    `;

    if (index === 0) {
      queryBuilder.where(condition, { [paramName]: searchTerm });
    } else {
      queryBuilder.andWhere(condition, { [paramName]: searchTerm });
    }
  });

  queryBuilder
    .orderBy('persona.razonSocial', 'ASC')
    .limit(50);

  return queryBuilder.getMany();
}
  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
