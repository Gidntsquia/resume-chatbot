import type { Request, Response } from "express";
import z from "zod";

const myChatSchema = z.object({
    prompt: z
        .string()
        .trim()
        .min(1, "Prompt is required.")
        .max(2000, "Prompt is too long (max 2000 characters)."),
    conversationId: z.uuid(),
});

export const chatController = {
    async sendMessage(req: Request, res: Response) {
        const myParseResult = myChatSchema.safeParse(req.body);

        if (!myParseResult.success) {
            res.status(400).json(z.treeifyError(myParseResult.error));
            return;
        }

        try {
            const { prompt, conversationId } = req.body;
            const response = await chatService.sendMessage(
                prompt,
                conversationId,
            );
        } catch (error) {
            res.status(500).json({ error: "Failed to generate a response." });
        }
    },
};
