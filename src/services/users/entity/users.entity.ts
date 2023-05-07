import { Entity, Column, BeforeInsert, PrimaryGeneratedColumn } from 'typeorm';
import { hashSync, genSaltSync } from 'bcrypt';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  active: boolean;

  @Column({ type: 'datetime' })
  created_at: any;

  @Column({ type: 'datetime' })
  updated_at: any;

  user_type?: string;

  ncu_id?: number;

  sru_user_id?: number;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashSync(this.password, genSaltSync(10));
  }
  /* 
  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];
  */
}
