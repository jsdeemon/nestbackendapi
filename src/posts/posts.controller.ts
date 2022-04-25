import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { createPostDto } from './dto/create-post.dto';
import { PostsService } from 'src/posts/posts.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: createPostDto,
    @UploadedFile() image ) {
        return this.postService.create(dto, image)
    }
}
