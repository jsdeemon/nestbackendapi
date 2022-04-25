import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

interface PostCreationAttrs {
    title: string,
    content: string;
    userId: number;
    image: string;
}


@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {

    @ApiProperty({example: '1', description: 'Unique identificator'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'New title', description: 'Post title'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Lorem ipsum dolor ...', description: 'Post content'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @Column({type: DataType.STRING}) 
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User;


}