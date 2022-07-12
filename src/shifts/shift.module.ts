import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShiftController } from "./controllers/shift.controller";
import { ShiftEntity } from "./entities/shift.entity";
import { ShiftService } from "./services/shift.service";

@Module({
	imports: [TypeOrmModule.forFeature([ShiftEntity])],
	controllers: [ShiftController],
	providers: [ShiftService],
	exports: [ShiftService],
})
export class ShiftModule {}
