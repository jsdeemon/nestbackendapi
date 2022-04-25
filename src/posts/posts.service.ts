import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createPostDto } from 'src/posts/dto/create-post.dto';
import { Post } from 'src/posts/posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post, private fileService: FilesService) {

    }

    async create(dto: createPostDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const post = await this.postRepository.create({...dto, image: fileName})
        return post 
    }
}
