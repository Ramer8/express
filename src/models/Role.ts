import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
 //arroba nos da mas propiedades al role
@Entity("roles")

export class Role extends BaseEntity {//'extends' hace que herede propiedades del padre,baseEntity da + propiedades a la clase Role.
  
  @PrimaryGeneratedColumn()

  id!: number

  @Column({ name: "name" })

  name!: string

  @OneToMany(() => User, (user)=> user.role) //el primer User es el modelo, es con que tabla esta relacionada.
  user!: User[];

  //este rol apunta a user. // user.role al principio chilla x q no esta dado de alta en la otra tabla q lo relaciono

}
