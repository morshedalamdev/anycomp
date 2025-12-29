import { Request, Response } from "express";
import {
  create,
  findWithMedia,
  findById,
  findList,
  remove,
  update,
  updateDraft,
} from "../models/specialistsModel";
import {
  SpecialistSchema,
} from "../utils/validation";

export const createSpecialist = async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    const validation = SpecialistSchema.safeParse(data);
    if (!validation.success) {
      console.log('validation :>> ', validation);
      return res.status(400).json({
        success: false,
        message: "Invalid data",
        errors: validation.error.errors,
      });
    }

    const result = await create(data);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to create specialist",
      });
    }

    res.json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err?.message });
  }
};

export const getAllSpecialists = async (req: Request, res: Response) => {
  try {
    const result = await findWithMedia();
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to get specialists data",
      });
    }

    res.json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err?.message });
  }
};

export const getSpecialistList = async (req: Request, res: Response) => {
  try {
    const result = await findList();
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to get specialists list",
      });
    }

    res.json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err?.message });
  }
};

export const getSpecialistById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await findById(id);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to get specialist data",
      });
    }

    res.json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err?.message });
  }
};

export const updateDraftToPublished = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    if (data.is_draft) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }

    const result = await updateDraft(id, data);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to publish the specialist",
      });
    }

    res.json({
      success: true,
    });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err?.message });
  }
};

export const updateSpecialist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const validation = SpecialistSchema.safeParse(data);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
        errors: validation.error.errors,
      });
    }

    const result = await update(id, data);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to update specialist data",
      });
    }

    res.json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err?.message });
  }
};

export const deleteSpecialist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await remove(id);
    res.json({
      success: true,
    });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err?.message });
  }
};
