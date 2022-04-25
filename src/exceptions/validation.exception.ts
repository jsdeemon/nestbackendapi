import {HttpException} from '@nestjs/common'
import { HttpStatus } from '@nestjs/common';

export class validationException extends HttpException {
    messages;

    constructor(response) {
        super(response, HttpStatus.BAD_REQUEST)
        this.messages = response
    }
}