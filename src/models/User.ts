import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import { Role } from "./Role"
@Entity("users")
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number
  @Column({ name: "first_name" })
  first_name!: string

  @Column({ name: "last_name" })
  last_name!: string

  @Column({ name: "password_hash" })
  password!: string

  @Column({name:"email"})
  email!: string

  @Column({ name: "updated_at" })
  cretedAt!: Date

  @Column({ name: "created_at" })
  updatedAt!: Date
//   isActive!: boolean

  @ManyToOne(()=> Role, (role)=> role.user)
  @JoinColumn({name:"role_id"}) //campo personalizado a la bd
  role!:Role;
  //aqui va corchetes de array 'Role[]'? 
  //Nose si seria un solo rol para ese solo usuario y por eso no va corchetes.
}
