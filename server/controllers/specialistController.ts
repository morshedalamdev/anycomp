import { Request, Response } from "express";
import {
  create,
  findWithMedia,
  findById,
  findList,
  remove,
  update,
} from "../models/specialistsModel";

interface Props {
  req: Request;
  res: Response;
}

export const createSpecialist = async ({ req, res }: Props) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res
        .status(400)
        .json({ success: false, message: "Data is required" });
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

export const getAllSpecialists = async ({ req, res }: Props) => {
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

export const getSpecialistList = async ({ req, res }: Props) => {
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

export const getSpecialistById = async ({ req, res }: Props) => {
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

export const updateSpecialist = async ({ req, res }: Props) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    if (!data) {
      return res
        .status(400)
        .json({ success: false, message: "Data is required" });
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

export const deleteSpecialist = async ({ req, res }: Props) => {
  try {
    const { id } = req.params;

    const result = await remove(id);
    
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete specialist",
      });
    }

    res.json({
      success: true
    });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err?.message });
  }
};
