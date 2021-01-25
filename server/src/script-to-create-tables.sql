
DROP TABLE if EXISTS users;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "password" varchar
);

INSERT INTO users ("name",email,"password") VALUES ('Marie Tonelli', 'marie@thonet.uk','1234');
INSERT INTO users ("name",email,"password") VALUES ('John Cushard', 'john@thonet.uk','1234');
INSERT INTO users ("name",email,"password") VALUES ('Abdu Lepen', 'abdu@thonet.uk','1234');
