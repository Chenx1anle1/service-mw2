import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

import { BaseModel } from './base';

@EntityModel({
  name: 'admin_users',
})
export default class AdminUserModel extends BaseModel {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 190,
    comment: '用户名',
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: true,
    comment: '密码',
  })
  password: string;

  @Column({
    type: 'varchar',
    comment: '名称',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '头像',
  })
  avatar: string;

  @Column({
    type: 'varchar',
    length: 100,
    comment: '记住token',
    name: 'remember_token',
  })
  rememberToken: string;
}

/**
 * 查询管理员用户信息参数
 */
export interface GetAdminUserOpts {
  id?: string;
  name?: string; // 名称
  username?: string; // 帐号
  sorter?: string; // 排序
  pageSize: number;
  current: number;
}

/**
 * 管理员用户信息
 */
export interface AdminUserInfo {
  id?: string;
  username?: string;
  name?: string;
  password?: string;
  avatar?: string;
  roles?: string[];
  permissions?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
