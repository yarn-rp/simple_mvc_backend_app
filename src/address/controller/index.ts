import { AddressModel } from "../model";
import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";

class AddressController {
  async createNewAAddress(req: Request, res: Response) {
    const id = uuidV4();
    try {
      const record = await AddressModel.create({ ...req.body, id });
      return res.json({ record, msg: "Successful created address" });
    } catch (e) {
      return res.json({
        msg: `There was an error creating the address: ${e}`,
        status: 500,
      });
    }
  }
  async getAddresses(req: Request, res: Response) {
    try {
      const limit = (req.query?.take ?? 10) as number | undefined;
      const offset = req.query?.skip as number| undefined;
      const addresses = await AddressModel.findAll({where:{},limit, offset});
      return res.json(addresses);
    } catch (e) {
      return res.json({
        msg: `There was an error fetching the address: ${e}`,
        status: 500,
      });
    }
  }
}

export default new AddressController();
