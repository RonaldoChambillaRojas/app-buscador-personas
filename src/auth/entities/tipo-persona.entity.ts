import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipopersona') 
export class TipoPersona {
  @PrimaryGeneratedColumn({ name: 'IdTipoPersona' })
  id: number;

  @Column({ name: 'NombreTipoPersona', length: 50 })
  nombre: string;

  @Column({ name: 'IndicadorEstado', length: 1 })
  estado: string;

  @Column({ name: 'UsuarioRegistro', length: 50 })
  usuarioRegistro: string;

  @Column({ name: 'FechaRegistro', type: 'timestamp' })
  fechaRegistro: Date;

  @Column({ name: 'UsuarioModificacion', length: 50, nullable: true })
  usuarioModificacion: string;

  @Column({ name: 'FechaModificacion', type: 'timestamp', nullable: true })
  fechaModificacion: Date;
}