
 # Case Back-End: Placar Jogos Olimpicos.

## Jogos Olímpicos
Construção de uma API REST que será responsável por marcar e dizer os vencedores das seguintes modalidades:

- 100m rasos: Menor tempo vence;
- Lançamento de Dardo: Maior distância vence;


## API
Através da API, devemos ser capazes de:

1.Criar uma competição;
2.Cadastrar resultados para uma competição (todos os campos são obrigatórios), 

Ex:
  
        {
        "competicao": "100m classificatoria 1", 
        "atleta": "Joao das Neves", 
        "value": "10.234", 
        "unidade": "s"
      }


Ex:

      {
        "competicao": "Dardo semifinal", 
        "atleta": "Claudio", 
        "value": "70.43", 
        "unidade": "m"
      }

4. Finalizar uma competição.
5. Retornar o ranking da competição, exibindo a posição final de cada atleta.

### Tecnologias utilizadas:
-Node.Js
-Express
-TypeScript
-Knex
-MySql

### Para Rodar o Projeto
git clone https://github.com/fmalcantara/Case-Back-Placar-Jogos-Olimpicos.git

cd Case-Back-Placar-Jogos-Olimpicos

npm install

-Crie uma variavel de ambiente com o aquivo.env

PORT = 3003
DB_HOST = ""
DB_USER = ""
DB_PASSWORD = ""
DB_DATABASE = ""