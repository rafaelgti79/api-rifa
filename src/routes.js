import { Router } from "express";
import jwt from "./token.js";
import controllerRifas from "./controllers/controller.rifas.js"; 
import controllerUser from "./controllers/controller.user.js";

const router = Router();

 

// listar rifas
router.get("/rifas", controllerRifas.Listar );
router.get("/rifas/viveiros", controllerRifas.ListarViveiros );

// cadastrar rifas
router.post("/rifas/viveiros", controllerRifas.Inserir );
router.post("/rifas/add", controllerRifas.criarTabela);

//mover rifas
router.get("/rifas/viveiros/mover/:numero", controllerRifas.Mover );



// Services (serviços prestados)...

//Admins acesso ao sistema web
router.post ("/admin/register", controllerUser.InserirAdmin);
router.post ("/admin/login", controllerUser.LoginAdmin);
router.get("/admin/users", jwt.validateToken, controllerUser.Listar);
//router.get("/admin/appointments", jwt.validateToken, controllerAppointments.Listar);
//router.get("/admin/appointments/:id_appointment", jwt.validateToken, controllerAppointments.ListarId);
//router.post("/admin/appointments", jwt.validateToken, controllerAppointments.InserirAdmin);
//router.put("/admin/appointments/:id_appointment", jwt.validateToken, controllerAppointments.EditarAdmin);


//Ususarios
router.post ("/users/register", controllerUser.Inserir);
router.post ("/users/login", controllerUser.Login);
router.get ("/users/profile", jwt.validateToken, controllerUser.Profile);




export default router;