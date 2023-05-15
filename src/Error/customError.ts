export class CustomError extends Error {
  constructor(public statuscode: number, public message: string){
    super(message)
  }
}