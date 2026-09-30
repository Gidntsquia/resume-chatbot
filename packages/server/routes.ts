import express from "express";
import type { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
});

router.post("/api/chat", (req: Request, res: Response) => {
    const { prompt, conversationId } = req.body;
    res.json(`TEST ${prompt} , ${conversationId}`);



    
});

export default router;
