# Claviculário SENAI

<img src="https://images.tcdn.com.br/img/img_prod/103999/1677_zoom_1_20120829125740.jpg" width=150px height=150px>

1. Tabelas

### **pessoa**

| codigo        | descricao           | tipo_pessoa (fk_pessoa_tipo_pessoa)  |
| ------------- |:-------------:| :-----:|
| INT      | VARCHAR(100) | INT |

```mysql
  CREATE TABLE pessoa
  (
    codigo INT NOT NULL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    tipo_pessoa INT NOT NULL
    CONSTRAINT 'fk_pessoa_tipo_pessoa'
    FOREIGN KEY (tipo_pessoa) REFERENCES tipo_pessoa(codigo)
  );
```

---

### **tipo_pessoa**

| codigo |   descricao   |
| :----: | :-----------: |
| INT    | VARCHAR(100)  |

```mysql
  CREATE TABLE tipo_pessoa
  (
    codigo INT NOT NULL PRIMARY KEY,
    descricao VARCHAR(60) NOT NULL,
  );
```

---
