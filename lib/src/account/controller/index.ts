import { Request, Response } from "express";

import datasource from "../../../core/database";
import { Address } from "../../address/model";
import { Account } from "../model";

class AccountController {
  async createAccount(req: Request, res: Response) {
    try {
      const addressId = req.body.address_id;
      const address = await datasource.manager.findOne(Address, {
        where: {
          id: addressId,
        },
      });
      if (address == null) {
        return res.json({
          msg: `There is no address with id ${addressId}`,
          status: 404,
        });
      }
      const record = datasource.manager.create<Account>(Account, {
        ...req.body,
        address,
      });
      const value = await datasource.manager.save(record);
      return res.json({ value, msg: "Successful created address" });
    } catch (e) {
      return res.json({
        msg: `There was an error creating the address: ${e}`,
        status: 500,
      });
    }
  }
  async getAccounts(req: Request, res: Response) {
    try {
      const take = (req.query?.take ?? 10) as number | undefined;
      const skip = req.query?.skip as number | undefined;

      const accounts = datasource.manager.find(Account, {
        skip: skip,
        take: take,
      });
      return res.json(accounts);
    } catch (e) {
      return res.json({
        msg: `There was an error fetching the address: ${e}`,
        status: 500,
      });
    }
  }
}

export default new AccountController();
