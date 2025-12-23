import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Persona } from './persona.entity';

@Entity('tipodocumentoidentidad')
export class TipoDocumentoIdentidad {
  @PrimaryGeneratedColumn({ name: 'IdTipoDocumentoIdentidad' })
  idTipoDocumentoIdentidad: number;

  @Column({ name: 'CodigoDocumentoIdentidad', type: 'varchar', length: 10 })
  codigoDocumentoIdentidad: string;

  @Column({ name: 'NombreTipoDocumentoIdentidad', type: 'varchar', length: 100 })
  nombreTipoDocumentoIdentidad: string;

  @Column({ name: 'NombreAbreviado', type: 'varchar', length: 50, nullable: true })
  nombreAbreviado: string;

  @Column({ name: 'IndicadorEstado', type: 'varchar', length: 1 })
  indicadorEstado: string;

  @Column({ name: 'UsuarioRegistro', type: 'varchar', length: 50 })
  usuarioRegistro: string;

  @Column({ name: 'FechaRegistro', type: 'timestamp' })
  fechaRegistro: Date;

  @Column({ name: 'UsuarioModificacion', type: 'varchar', length: 50, nullable: true })
  usuarioModificacion: string;

  @Column({ name: 'FechaModificacion', type: 'timestamp', nullable: true })
  fechaModificacion: Date;

  @OneToMany(() => Persona, persona => persona.tipoDocumentoIdentidad)
  personas: Persona[];
}