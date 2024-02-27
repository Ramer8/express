import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"


@Entity("roles") //arroba nos da mas propiedades al role
export class Role extends BaseEntity { //extends hace que herede propiedades del padre,
    //baseEntity 
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: "name" })
  name!: string
  @OneToMany(() => User, (user)=> user.role) //el primer User es el modelo, es con que tabla esta relacionada.
  //este rol apunta a user.
  //user.role al principio chilla x q no esta dado de alta en la otra tabla q lo relaciono
  user!: User[];

}
