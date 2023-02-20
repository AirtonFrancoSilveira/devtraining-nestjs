import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, Res, HttpCode, Param, Post, Patch, Delete } from '@nestjs/common/decorators';
import { response } from 'express';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll()
  }

  // @Get(':name')
  // findName(@Param() param) {
  //   return `Curso : ${param.name}`
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  //@HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  //Função com retorno de status code fixo
  // @Get('/unidade/:res')
  // findRes(@Res() response, @Param() param) {
  //   return response.status(400).send(`Unidade: ${param.res}`)
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.remove(id)
  }
}
