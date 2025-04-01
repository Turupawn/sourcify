import { Router } from "express";
import { verifyEmojity } from "./emojity.stateless.handlers";
import { checkPerfectMatch } from "../../../controllers.common";

const router: Router = Router();

router.route("/verify/emojity").post(checkPerfectMatch, verifyEmojity);

export default router;
