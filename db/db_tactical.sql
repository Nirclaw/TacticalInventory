CREATE DATABASE db_tactical;

USE db_tactical;

CREATE TABLE
    suministro(
        suministro_id INT PRIMARY KEY AUTO_INCREMENT,
        suministro_id_arma_pistola_semiauto INT NOT NULL,
        suministro_id_cuchillo_combate INT NOT NULL,
        suministro_id_fusil_presicion INT NOT NULL,
        suministro_id_carabina INT NOT NULL,
        suministro_id_granada INT NOT NULL,
        suministro_id_escopeta INT NOT NULL,
        suministro_id_revolver INT NOT NULL,
        suministro_id_fusil_asalto INT NOT NULL,
        suministro_nombre_completo VARCHAR(100) NOT NULL,
        suministro_rango VARCHAR(100) NOT NULL,
        suministro_edad INT NOT NULL,
        suministro_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        suministro_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    clases_armas(
        clase_id INT PRIMARY KEY AUTO_INCREMENT,
        clase_nombre VARCHAR(40) NOT NULL,
        clase_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        clase_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    revolveres(
        revolver_id INT PRIMARY KEY AUTO_INCREMENT,
        revolver_capacidad INT NOT NULL,
        revolver_calibre INT NOT NULL,
        revolver_nombre VARCHAR(70) NOT NULL,
        revolver_pais_origen VARCHAR(100) NOT NULL,
        revolver_serial INT NOT NULL,
        revolver_clase_id INT NOT NULL,
        revolver_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        revolver_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    fusiles_precision(
        fusil_precision_id INT PRIMARY KEY AUTO_INCREMENT,
        fusil_precision_capacidad INT NOT NULL,
        fusil_precision_calibre INT NOT NULL,
        fusil_precision_nombre VARCHAR(70) NOT NULL,
        fusil_precision_pais_origen VARCHAR(100) NOT NULL,
        fusil_precision_serial INT NOT NULL,
        fusil_precision_clase_id INT NOT NULL,
        fusil_precision_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        fusil_precision_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    granadas(
        granada_id INT PRIMARY KEY AUTO_INCREMENT,
        granada_peso INT NOT NULL,
        granada_destruivo VARCHAR(100) NOT NULL,
        granada_pais_origen VARCHAR(100) NOT NULL,
        granada_nombre VARCHAR(100) NOT NULL,
        granada_clase_id INT NOT NULL,
        granada_serial INT NOT NULL,
        granada_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        granada_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    pistolas_semiautomaticas(
        pistola_semiauto_id INT PRIMARY KEY AUTO_INCREMENT,
        pistola_semiauto_capacidad INT NOT NULL,
        pistola_semiauto_calibre INT NOT NULL,
        pistola_semiauto_nombre VARCHAR(70) NOT NULL,
        pistola_semiauto_pais_origen VARCHAR(100) NOT NULL,
        pistola_semiauto_serial INT NOT NULL,
        pistola_semiauto_clase_id INT NOT NULL,
        pistola_semiauto_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        pistola_semiauto_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    fusiles_asalto(
        fusil_asalto_id INT PRIMARY KEY AUTO_INCREMENT,
        fusil_asalto_capacidad INT NOT NULL,
        fusil_asalto_calibre INT NOT NULL,
        fusil_asalto_nombre VARCHAR(70) NOT NULL,
        fusil_asalto_pais_origen VARCHAR(100) NOT NULL,
        fusil_asalto_serial INT NOT NULL,
        fusil_asalto_clase_id INT NOT NULL,
        fusil_asalto_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        fusil_asalto_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    carabinas(
        carabina_id INT PRIMARY KEY AUTO_INCREMENT,
        carabina_capacidad INT NOT NULL,
        carabina_calibre INT NOT NULL,
        carabina_nombre VARCHAR(70) NOT NULL,
        carabina_pais_origen VARCHAR(100) NOT NULL,
        carabina_serial INT NOT NULL,
        carabina_clase_id INT NOT NULL,
        carabina_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        carabina_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    escopetas(
        escopeta_id INT PRIMARY KEY AUTO_INCREMENT,
        escopeta_capacidad INT NOT NULL,
        escopeta_calibre INT NOT NULL,
        escopeta_nombre VARCHAR(70) NOT NULL,
        escopeta_pais_origen VARCHAR(100) NOT NULL,
        escopeta_serial INT NOT NULL,
        escopeta_clase_id INT NOT NULL,
        escopeta_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        escopeta_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    cuchillo_combate(
        cuchillo_id INT PRIMARY KEY AUTO_INCREMENT,
        cuchillo_peso INT NOT NULL,
        cuchillo_longitu INT NOT NULL,
        cuchillo_pais_origen VARCHAR(100) NOT NULL,
        cuchillo_nombre VARCHAR(70) NOT NULL,
        cuchillo_clase_id INT NOT NULL,
        cuchillo_serial INT NOT NULL,
        cuchillo_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        cuchillo_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

ALTER TABLE revolveres ADD  CONSTRAINT fk_revolveres FOREIGN KEY (revolver_clase_id) REFERENCES clases_armas(clase_id);
ALTER TABLE fusiles_precision ADD  CONSTRAINT fk_fusiles_precision FOREIGN KEY (fusil_precision_clase_id) REFERENCES clases_armas(clase_id);
ALTER TABLE granadas ADD  CONSTRAINT fk_granadas FOREIGN KEY (granada_clase_id) REFERENCES clases_armas(clase_id);

ALTER TABLE pistolas_semiautomaticas ADD  CONSTRAINT fk_pistolas_semiautomaticas FOREIGN KEY (pistola_semiauto_clase_id) REFERENCES clases_armas(clase_id);

ALTER TABLE fusiles_asalto ADD  CONSTRAINT fk_fusiles_asalto FOREIGN KEY (fusil_asalto_clase_id) REFERENCES clases_armas(clase_id);
ALTER TABLE carabinas ADD  CONSTRAINT fk_carabinas FOREIGN KEY (carabina_clase_id) REFERENCES clases_armas(clase_id);
ALTER TABLE escopetas ADD  CONSTRAINT fk_escopetas FOREIGN KEY (escopeta_clase_id) REFERENCES clases_armas(clase_id);
ALTER TABLE cuchillo_combate ADD  CONSTRAINT fk_cuchillo_combate FOREIGN KEY (cuchillo_clase_id) REFERENCES clases_armas(clase_id);

ALTER TABLE suministro ADD  CONSTRAINT fk_suministro FOREIGN KEY (suministro_id_revolver) REFERENCES revolveres(revolver_id);

ALTER TABLE suministro ADD  CONSTRAINT fk_suministro1 FOREIGN KEY (suministro_id_cuchillo_combate) REFERENCES cuchillo_combate(cuchillo_id);

ALTER TABLE suministro ADD  CONSTRAINT fk_suministro2 FOREIGN KEY (suministro_id_fusil_presicion) REFERENCES fusiles_precision(fusil_precision_id);

ALTER TABLE suministro ADD  CONSTRAINT fk_suministro3 FOREIGN KEY (suministro_id_carabina) REFERENCES carabinas(carabina_id);
ALTER TABLE suministro ADD  CONSTRAINT fk_suministro4 FOREIGN KEY (suministro_id_granada) REFERENCES granadas(granada_id);

ALTER TABLE suministro ADD  CONSTRAINT fk_suministro5 FOREIGN KEY (suministro_id_escopeta) REFERENCES escopetas(escopeta_id);
ALTER TABLE suministro ADD  CONSTRAINT fk_suministro6 FOREIGN KEY (suministro_id_arma_pistola_semiauto) REFERENCES pistolas_semiautomaticas(pistola_semiauto_id);
ALTER TABLE suministro ADD  CONSTRAINT fk_suministro7 FOREIGN KEY (suministro_id_fusil_asalto) REFERENCES fusiles_asalto(fusil_asalto_id);


-- Insert data into the 'clases_armas' table
INSERT INTO clases_armas (clase_nombre) VALUES
    ('Revolver'),
    ('Fusil de Precisión'),
    ('Granada'),
    ('Pistola Semiautomática'),
    ('Fusil de Asalto'),
    ('Carabina'),
    ('Escopeta'),
    ('Cuchillo de Combate');

-- Insert data into the 'revolveres' table
INSERT INTO revolveres (revolver_capacidad, revolver_calibre, revolver_nombre, revolver_pais_origen, revolver_serial, revolver_clase_id)
VALUES
    (6, 38, 'Colt Python', 'Estados Unidos', 20220001, 1),
    (5, 44, 'Smith & Wesson Model 29', 'Estados Unidos', 20220002, 1),
    (6, 357, 'Ruger GP100', 'Estados Unidos', 20220003, 1);

-- Insert data into the 'fusiles_precision' table
INSERT INTO fusiles_precision (fusil_precision_capacidad, fusil_precision_calibre, fusil_precision_nombre, fusil_precision_pais_origen, fusil_precision_serial, fusil_precision_clase_id)
VALUES
    (5, 308, 'Remington 700', 'Estados Unidos', 20220004, 2),
    (10, 338, 'Barrett M82', 'Estados Unidos', 20220005, 2),
    (5, 300, 'Sako TRG', 'Finlandia', 20220006, 2);

-- Insert data into the 'granadas' table
INSERT INTO granadas (granada_peso, granada_destruivo, granada_pais_origen, granada_nombre, granada_serial, granada_clase_id)
VALUES
    (400, 'Sí', 'Estados Unidos', 'M67', 20220007, 3),
    (300, 'Sí', 'Rusia', 'F-1', 20220008, 3),
    (450, 'Sí', 'Alemania', 'DM51A1', 20220009, 3);

-- Insert data into the 'pistolas_semiautomaticas' table
INSERT INTO pistolas_semiautomaticas (pistola_semiauto_capacidad, pistola_semiauto_calibre, pistola_semiauto_nombre, pistola_semiauto_pais_origen, pistola_semiauto_serial, pistola_semiauto_clase_id)
VALUES
    (17, 9, 'Glock 17', 'Austria', 20220010, 4),
    (12, 9, 'SIG Sauer P320', 'Suiza', 20220011, 4),
    (15, 9, 'Beretta 92', 'Italia', 20220012, 4);

-- Insert data into the 'fusiles_asalto' table
INSERT INTO fusiles_asalto (fusil_asalto_capacidad, fusil_asalto_calibre, fusil_asalto_nombre, fusil_asalto_pais_origen, fusil_asalto_serial, fusil_asalto_clase_id)
VALUES
    (30, 5.56, 'M16', 'Estados Unidos', 20220013, 5),
    (30, 7.62, 'AK-47', 'Rusia', 20220014, 5),
    (25, 5.56, 'Steyr AUG', 'Austria', 20220015, 5);

-- Insert data into the 'carabinas' table
INSERT INTO carabinas (carabina_capacidad, carabina_calibre, carabina_nombre, carabina_pais_origen, carabina_serial, carabina_clase_id)
VALUES
    (5, 5.56, 'Ruger Mini-14', 'Estados Unidos', 20220016, 6),
    (10, 7.62, 'Springfield M1A', 'Estados Unidos', 20220017, 6),
    (10, 5.56, 'Kel-Tec SUB-2000', 'Estados Unidos', 20220018, 6);

-- Insert data into the 'escopetas' table
INSERT INTO escopetas (escopeta_capacidad, escopeta_calibre, escopeta_nombre, escopeta_pais_origen, escopeta_serial, escopeta_clase_id)
VALUES
    (6, 12, 'Remington 870', 'Estados Unidos', 20220019, 7),
    (5, 20, 'Mossberg 500', 'Estados Unidos', 20220020, 7),
    (8, 12, 'Benelli M4', 'Italia', 20220021, 7);

-- Insert data into the 'cuchillo_combate' table
INSERT INTO cuchillo_combate (cuchillo_peso, cuchillo_longitu, cuchillo_pais_origen, cuchillo_nombre, cuchillo_serial, cuchillo_clase_id)
VALUES
    (200, 30, 'Estados Unidos', 'Ka-Bar', 20220022, 8),
    (180, 28, 'Alemania', 'Eickhorn KM2000', 20220023, 8),
    (210, 32, 'Estados Unidos', 'Gerber LMF II', 20220024, 8);

-- Insert data into the 'suministro' table

DELETE FROM suministro;
INSERT INTO suministro (
    suministro_id_arma_pistola_semiauto,
    suministro_id_cuchillo_combate,
    suministro_id_fusil_presicion,
    suministro_id_carabina,
    suministro_id_granada,
    suministro_id_escopeta,
    suministro_id_revolver,
    suministro_id_fusil_asalto,
    suministro_nombre_completo,
    suministro_rango,
    suministro_edad
) VALUES
    (1, 1, 1, 1, 1, 1, 1, 1, 'Soldado 1', 'Sargento', 30),
    (2, 2, 2, 2, 2, 2, 2, 2, 'Soldado 2', 'Cabo', 28),
    (3, 3, 3, 3, 3, 3, 3, 3, 'Soldado 3', 'Cabo', 26),
    (1, 2, 3, 3, 1, 2, 3, 3, 'Soldado 4', 'Soldado Raso', 24),
    (2, 3, 1, 2, 2, 3, 3, 1, 'Soldado 5', 'Cabo', 27),
    (3, 1, 2, 3, 3, 1, 2, 2, 'Soldado 6', 'Sargento', 32),
    (2, 2, 2, 3, 1, 3, 2, 1, 'Soldado 7', 'Cabo', 25),
    (1, 3, 1, 2, 2, 2, 3, 3, 'Soldado 8', 'Soldado Raso', 23),
    (3, 1, 2, 1, 3, 1, 3, 2, 'Soldado 9', 'Cabo', 29),
    (2, 2, 3, 2, 1, 2, 3, 1, 'Soldado 10', 'Sargento', 31);



