-- Active: 1674225102411@@35.226.146.116@3306@jbl-4416204-felipe-alcantara
CREATE TABLE IF NOT EXISTS COMP_TABLE(
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  status ENUM ("OPEN", "CLOSED") NOT NULL DEFAULT "OPEN"
);

CREATE TABLE IF NOT EXISTS COMPRESULT_TABLE(
  id VARCHAR(255) PRIMARY KEY,
  competicao VARCHAR(255) NOT NULL,
  atleta VARCHAR(255) NOT NULL,
  value FLOAT NOT NULL,
  unidade VARCHAR(1) NOT NULL,
  competicao_id VARCHAR(255),
  FOREIGN KEY (competicao_id) REFERENCES COMP_TABLE (id)
);
