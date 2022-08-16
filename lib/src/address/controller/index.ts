import { Request, Response } from "express";

import datasource from "../../../core/database";
import { Address } from "../model";

class AddressController {
  async createNewAddress(req: Request, res: Response) {
    try {
      const entity = datasource.manager.create<Address>(Address, {
        ...req.body,
      });
      const record = await datasource.manager.save(entity);
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
      const take = (req.query?.take ?? 10) as number | undefined;
      const skip = req.query?.skip as number | undefined;
      const addresses = datasource.manager.find(Address, {
        skip: skip,
        take: take,
      });
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
