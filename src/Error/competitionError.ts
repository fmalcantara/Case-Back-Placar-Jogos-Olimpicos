import { CustomError } from "./customError";

export class CompetitionNotFound extends CustomError{
  constructor(){
    super(404, 'Competition not Found!')
  }
}

export class NameNotFound extends CustomError{
  constructor(){
    super(404, 'Name not Found')
  }
}

export class AtletaNotFound extends CustomError{
  constructor(){
    super(404, 'Atleta not Found!')
  }
}

export class ValueNotFound extends CustomError{
  constructor(){
    super(404, 'Value not Found!')
  }
}
export class UnidadeNotFound extends CustomError{
  constructor(){
    super(404, 'Atleta not Found!')

  }
}

export class NotExistsCompetition extends CustomError{
  constructor(){
    super(404, 'Competition not exists')
    
  }
}

export class CloseCompetition extends CustomError{
  constructor(){
    super(404, 'Competition Already Closed!')
    
  }
}

export class WrongUnit extends CustomError{
  constructor(){
    super(404, 'Wrog Unit! Only unit "S"(second) or "M" (meters)!')
    
  }
}


export class InvalidValue extends CustomError{
  constructor(){
    super(404, 'Invalid Value. Only Number')
    
  }
}
