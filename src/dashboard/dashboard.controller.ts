import { Controller, Get, Post, Put, Delete } from "@nestjs/common";

@Controller('dashboards')
export class DashboardsController {

    @Get()
    getAll(): string {
        return "All dashboard"
    }
    @Get(':id')
    get(){
        return "get dash with ID"
    }

    @Post()
    create() {
        return "create dash"
    }

    @Put()
    update() {
        return "update dash"

    }

    @Delete()
    delete() {
        return "delete dash"
    }

}