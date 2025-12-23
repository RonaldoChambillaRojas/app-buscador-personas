import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TipoDocumentoIdentidad } from './tipo-documento-identidad.entity';
import { TipoPersona } from './tipo-persona.entity';

@Entity('persona')
export class Persona {
  @PrimaryGeneratedColumn({ name: 'IdPersona' })
  idPersona: number;

  @Column({ name: 'ApellidoCompleto', type: 'varchar', length: 40, nullable: true })
  apellidoCompleto: string;

  @Column({ name: 'NombreCompleto', type: 'varchar', length: 40, nullable: true })
  nombreCompleto: string;

  @Column({ name: 'RazonSocial', type: 'varchar', length: 100 })
  razonSocial: string;

  @Column({ name: 'NumeroDocumentoIdentidad', type: 'varchar', length: 15 })
  numeroDocumentoIdentidad: string;

  @Column({ name: 'IdTipoDocumentoIdentidad' })
  idTipoDocumentoIdentidad: number;

  @Column({ name: 'IdTipoPersona' })
  idTipoPersona: number;

  @Column({ name: 'IdRol', type: 'int', nullable: true })
  idRol: number;

  @Column({ name: 'IdGradoAlumno', type: 'int', nullable: true })
  idGradoAlumno: number;

  @Column({ name: 'Direccion', type: 'varchar', length: 150 })
  direccion: string;

  @Column({ name: 'TelefonoFijo', type: 'varchar', length: 30, default: '' })
  telefonoFijo: string;

  @Column({ name: 'NombreComercial', type: 'varchar', length: 80, nullable: true })
  nombreComercial: string;

  @Column({ name: 'RepresentanteLegal', type: 'varchar', length: 80, nullable: true })
  representanteLegal: string;

  @Column({ name: 'Email', type: 'varchar', length: 80, nullable: true })
  email: string;

  @Column({ name: 'Celular', type: 'varchar', length: 30, default: '' })
  celular: string;

  @Column({ name: 'TelefonoPersonal', type: 'varchar', length: 70, default: '' })
  telefonoPersonal: string;

  @Column({ name: 'LugarNacimiento', type: 'varchar', length: 70, default: '' })
  lugarNacimiento: string;

  @Column({ name: 'Nacionalidad', type: 'varchar', length: 70, default: '' })
  nacionalidad: string;

  @Column({ name: 'Observacion', type: 'varchar', length: 80, nullable: true })
  observacion: string;

  @Column({ name: 'CondicionContribuyente', type: 'varchar', length: 50 })
  condicionContribuyente: string;

  @Column({ name: 'EstadoContribuyente', type: 'varchar', length: 50 })
  estadoContribuyente: string;

  @Column({ name: 'FechaNacimiento', type: 'date', nullable: true })
  fechaNacimiento: Date;

  @Column({ name: 'Sexo', type: 'int', nullable: true })
  sexo: number;

  @Column({ name: 'Foto', type: 'varchar', length: 200, nullable: true })
  foto: string;

  @Column({ name: 'IndicadorEstado', type: 'varchar', length: 1 })
  indicadorEstado: string;

  @Column({ name: 'FechaRegistro', type: 'timestamp' })
  fechaRegistro: Date;

  @Column({ name: 'UsuarioRegistro', type: 'varchar', length: 50 })
  usuarioRegistro: string;

  @Column({ name: 'FechaModificacion', type: 'timestamp', nullable: true })
  fechaModificacion: Date;

  @Column({ name: 'UsuarioModificacion', type: 'varchar', length: 50, nullable: true })
  usuarioModificacion: string;

  @Column({ name: 'UltimaPlacaVehiculoConductor', type: 'varchar', length: 30, default: '' })
  ultimaPlacaVehiculoConductor: string;

  @Column({ name: 'UltimaMarcaVehiculoConductor', type: 'varchar', length: 30, default: '' })
  ultimaMarcaVehiculoConductor: string;

  @Column({ name: 'ConstanciaInscripcionVigenteConductor', type: 'varchar', length: 30, default: '' })
  constanciaInscripcionVigenteConductor: string;

  @Column({ name: 'NumeroLicenciaConductor', type: 'varchar', length: 30, default: '' })
  numeroLicenciaConductor: string;

  // Relaciones
  @ManyToOne(() => TipoDocumentoIdentidad, tipoDoc => tipoDoc.personas)
  @JoinColumn({ name: 'IdTipoDocumentoIdentidad' })
  tipoDocumentoIdentidad: TipoDocumentoIdentidad;

  @ManyToOne(() => TipoPersona, tipoPersona => tipoPersona.personas)
  @JoinColumn({ name: 'IdTipoPersona' })
  tipoPersona: TipoPersona;
}