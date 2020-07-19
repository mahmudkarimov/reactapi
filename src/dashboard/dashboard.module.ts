import { Module } from "@nestjs/common";
import { DashboardsController } from "./dashboard.controller";

@Module({
    imports: [],
    controllers: [DashboardsController],
    providers: [],
  })
  export class DashboardsModule {}
  