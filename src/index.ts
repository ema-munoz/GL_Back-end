// import { AppDataSource } from "./data-source.js";
// import { Teacher } from "./entities/teacher.entity";

// AppDataSource.initialize()
// 	.then(async () => {
// 		console.log("Inserting a new teacher into the database...");
// 		const teacher = new Teacher();
//      teacher.identityCard = "1713289914"
// 		teacher.names = "Timber";
// 		teacher.lastNames = "Saw";
// 		teacher.institutionalMail = "t.saw@yavirac.edu.ec";
// 		teacher.cellPhone = 0987654321;
// 		await AppDataSource.manager.save(teacher);
// 		console.log("Saved a new teacher with id: " + teacher.id);

// 		console.log("Loading teachers from the database...");
// 		const teachers = await AppDataSource.manager.find(Teacher);
// 		console.log("Loaded teachers: ", teachers);

// 		console.log(
// 			"Here you can setup and run express / fastify / any other framework."
// 		);
// 	})
// 	.catch((error) => console.log(error));
