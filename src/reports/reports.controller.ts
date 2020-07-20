import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { ReportsService } from "./reports.service";

@Controller('reports')
export class ReportsController {

    constructor(private readonly reportsService: ReportsService) {

    }
    @Get()
    findAll(): any {
        return this.reportsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.reportsService.find(id)
    }

    @Post()
    create(@Body() report: any) {
        return this.reportsService.create(report)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() report: any) {
        return this.reportsService.update(id, report)

    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.reportsService.delete(id)
    }

}