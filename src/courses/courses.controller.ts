import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('courses')
export class CoursesController {
    @Get("list")
    findAll() {
        return "Lista de Cursos"
    }
    //1° Exemplo de implementação
    @Get("id/:id")
    findOne(@Param() paramns) {
        return `Curso #${paramns.id}`
    }
    //2° Exemplo de implementação
    @Get("name/:name")
    findOneCourseName(@Param('name') name: string) {
        return `Curso: ${name}`
    }
}
