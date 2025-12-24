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

  const normalTerm = term.trim();
  const cleanTerm = normalTerm.replace(/\s+/g, '').toUpperCase();
  
  const queryBuilder = this.personaRepository
    .createQueryBuilder('persona')
    .select([
      'persona.idPersona',
      'persona.razonSocial',
      'persona.numeroDocumentoIdentidad'
    ])
    .where(
      `(
        UPPER(persona.razonSocial) LIKE UPPER(:normalTerm) OR
        UPPER(REPLACE(persona.razonSocial, ' ', '')) LIKE :cleanTerm OR
        persona.numeroDocumentoIdentidad LIKE :normalTerm
      )`,
      { 
        normalTerm: `%${normalTerm}%`,
        cleanTerm: `%${cleanTerm}%`
      }
    )
    .orderBy('persona.razonSocial', 'ASC')
    .limit(50);

  return queryBuilder.getMany();
}
  async findOne(id: number) {
  const persona = await this.personaRepository
    .createQueryBuilder('persona')
    .leftJoinAndSelect('persona.tipoDocumentoIdentidad', 'tipoDoc')
    .leftJoinAndSelect('persona.tipoPersona', 'tipoPersona')
    .select([
      'persona.idPersona',
      'persona.nombreCompleto',
      'persona.apellidoCompleto',
      'persona.numeroDocumentoIdentidad',
      'persona.email',
      'persona.celular',
      'tipoDoc.nombreAbreviado',
      'tipoPersona.nombreTipoPersona',
      'persona.razonSocial',
    ])
    .where('persona.idPersona = :id', { id })
    .getOne();

  if (!persona) {
    return null; 
  }

  return {
    id: persona.idPersona,
    nombre: persona.nombreCompleto,
    apellidos: persona.apellidoCompleto,
    documento: persona.numeroDocumentoIdentidad,
    tipoDocumento: persona.tipoDocumentoIdentidad?.nombreAbreviado || 'N/A',
    tipoPersona: persona.tipoPersona?.nombreTipoPersona || 'N/A',
    email: persona.email,
    celular: persona.celular,
    razonSocial: persona.razonSocial,
  };
}

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
