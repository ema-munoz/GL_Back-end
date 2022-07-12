import { Module } from "@nestjs/common";
import { LabStateController } from "./lab_state.controller";
import { LabStateService } from "./lab_state.service";

@Module({
	controllers: [LabStateController],
	providers: [LabStateService],
	exports: [LabStateService],
})
export class LabStateModule {}
