import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, Res, HttpCode, Param, Post, Patch, Delete } from '@nestjs/common/decorators';
import { response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
