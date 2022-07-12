import { Module } from "@nestjs/common";
import { ShiftController } from "./controller/shift.controller";
import { ShiftService } from "./service/shift.service";

@Module({
	controllers: [ShiftController],
	providers: [ShiftService],
	exports: [ShiftService],
})
export class ShiftModule {}
