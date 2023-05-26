import { IIdGenerator } from "../../src/Business/ports";

export class IdGeneratorMock implements IIdGenerator {
  public generateId = jest.fn(()=>{
    return 'id'
  })
}