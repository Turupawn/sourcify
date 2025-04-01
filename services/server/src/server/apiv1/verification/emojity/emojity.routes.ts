import verifyStatelessRoutes from "./stateless/emojity.stateless.routes";

import { Router } from "express";

const router = Router();

router.use("/", verifyStatelessRoutes);

export default router;
