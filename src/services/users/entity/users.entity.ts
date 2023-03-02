import { Entity, Column, BeforeInsert, ObjectIdColumn } from 'typeorm';
import { hashSync, genSaltSync } from 'bcrypt';

@Entity({ name: 'users' })
export class User {
  @ObjectIdColumn()
  id: number;

  @Column({
    type: 'string',
  })
  firstName: string;

  @Column({
    type: 'string',
  })
  lastName: string;

  @Column({
    type: 'string',
    unique: true,
  })
  email: string;

  @Column({
    type: 'string',
  })
  password: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @Column({
    type: 'date',
  })
  createdAt: any;

  @Column({
    type: 'date',
  })
  updatedAt: any;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashSync(this.password, genSaltSync(10));
  }
  /* 
  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];
  */
}
