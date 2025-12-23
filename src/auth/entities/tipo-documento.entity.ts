import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipodocumento')
export class TipoDocumento {
  @PrimaryGeneratedColumn({ name: 'IdTipoDocumento' })
  id: number;

  @Column({ name: 'NombreTipoDocumento', length: 255 })
  nombre: string;

  @Column({ name: 'DescripcionTipoDocumento', length: 50, nullable: true })
  descripcion: string;

  @Column({ name: 'IndicadorEstado', length: 1 })
  estado: string;

  @Column({ name: 'UsuarioRegistro', length: 50 })
  usuarioRegistro: string;

  @Column({ name: 'FechaRegistro', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaRegistro: Date;

  @Column({ name: 'UsuarioModificacion', length: 50, nullable: true })
  usuarioModificacion: string;

  @Column({ name: 'FechaModificacion', type: 'timestamp', nullable: true })
  fechaModificacion: Date;
}