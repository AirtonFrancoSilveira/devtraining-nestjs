import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, Res, HttpCode, Param, Post, Patch, Delete } from '@nestjs/common/decorators';
import { response } from 'express';
//import { AppService } from './app.service';

@Controller('courses')
export class CoursesController {
  //constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return 'Listagem de cursos'
  }

  @Get(':name')
  findName(@Param() param) {
    return `Curso : ${param.name}`
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `Curso : ${id}`
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body) {
    return body
  }

  //Função com retorno de status code fixo
  @Get('/unidade/:res')
  findRes(@Res() response, @Param() param) {
    return response.status(400).send(`Unidade: ${param.res}`)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do Curso : ${id}`
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Body() body) {
    return `Exclusão do Curso : ${id}`
  }
}
