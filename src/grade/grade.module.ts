import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GradeEntity } from "./entities/grade.entity";
import { GradeController } from "./controllers/grade.controller";
import { GradeService } from "./services/grade.service";

@Module({
	imports: [TypeOrmModule.forFeature([GradeEntity])],
	controllers: [GradeController],
	providers: [GradeService],
	exports: [GradeService],
})
export class GradeModule {}
