import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShiftEntity } from "./entities/shift.entity";
import { ShiftController } from "./shift.controller";
import { ShiftService } from "./shift.service";

@Module({
	controllers: [ShiftController],
	providers: [ShiftService],
	exports: [ShiftService],
})
export class ShiftModule {}
