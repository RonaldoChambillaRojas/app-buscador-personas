import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TipoDocumento } from './tipo-documento.entity';
import { TipoPersona } from './tipo-persona.entity';

@Entity('persona')
export class Persona {
  @PrimaryGeneratedColumn({ name: 'IdPersona' })
  id: number;

  @ManyToOne(() => TipoDocumento, { nullable: true }) // Puede ser nulo
  @JoinColumn({ name: 'IdTipoDocumento' })
  tipoDocumento: TipoDocumento;

  @Column({ name: 'NumeroDocumento', length: 50, nullable: true }) // Aumentamos tamaño y permitimos nulo
  numeroDocumento: string;

  @Column({ name: 'Nombres', length: 255, nullable: true }) // 255 y nulo
  nombres: string;

  @Column({ name: 'ApellidoPaterno', length: 255, nullable: true }) // 255 y nulo
  apellidoPaterno: string;

  @Column({ name: 'ApellidoMaterno', length: 255, nullable: true }) // <--- ESTE ERA EL CULPABLE DEL ERROR
  apellidoMaterno: string;

  @ManyToOne(() => TipoPersona, { nullable: true })
  @JoinColumn({ name: 'IdTipoPersona' })
  tipoPersona: TipoPersona;

  @Column({ name: 'IndicadorEstado', length: 1, default: 'A' })
  estado: string;

  @Column({ name: 'UsuarioRegistro', length: 50, nullable: true })
  usuarioRegistro: string;

  @Column({ name: 'FechaRegistro', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaRegistro: Date;
}