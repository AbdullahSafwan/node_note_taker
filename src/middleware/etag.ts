import { Request, Response, NextFunction } from "express";
import { sendErrorResponse } from "../utils/responseHelper";

export const requireETag = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const ifMatch = req.headers["if-match"];

    if (!ifMatch) {
      sendErrorResponse(res, 428, "If-Match header is required for this operation");
      return;
    }

    const etag = parseInt(ifMatch.replace(/"/g, ""), 10);

    if (isNaN(etag)) {
      sendErrorResponse(res, 400, "Invalid If-Match header format");
      return;
    }

    // storing parsed ETag in req for use in controllers/services
    req.etag = etag;
    next();
  } catch (error) {
    console.error("Error in requireETag middleware:", error);
    sendErrorResponse(res, 500, "Error processing If-Match header");
  }
};

export const setETagHeader = (res: Response, version: number): void => {
  res.setHeader("ETag", `"${version}"`);
};
