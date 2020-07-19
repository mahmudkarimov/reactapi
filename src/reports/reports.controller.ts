import { Controller, Get, Post, Put, Delete } from "@nestjs/common";

@Controller('reports')
export class ReportsController {

    @Get()
    getAll(): string {
        return "All repots"
    }
    @Get(':id')
    get(){
        return "get repot with ID"
    }

    @Post()
    create() {
        return "create repots"
    }

    @Put()
    update() {
        return "update repots"

    }

    @Delete()
    delete() {
        return "delete repots"
    }

}