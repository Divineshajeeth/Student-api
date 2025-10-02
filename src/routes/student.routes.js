import { Router } from "express";
import { getStudents, postStudent } from
"../controllers/student.controller.js";
const r = Router();
r.get("/students", getStudents);
r.post("/students", postStudent);
export default r;