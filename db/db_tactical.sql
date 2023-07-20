CREATE DATABASE db_tactical;

USE db_tactical;

CREATE TABLE
    inventario(
        inventario_id INT PRIMARY KEY AUTO_INCREMENT,
        inventario_id_arma INT NOT NULL,
        inventario_nombre_asignado VARCHAR(50) NOT NULL,
        inventario_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        inventario_actualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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

    CREATE TABLE cuchillo_combate(
        cuchillo_id INT PRIMARY KEY AUTO_INCREMENT,
        cuchillo_peso INT NOT NULL,
        cuchillo_longitu INT NOT NULL,
        cuchillo_pais_origen VARCHAR(100) NOT NULL,
        cuchillo_nombre VARCHAR(70) NOT NULL,
        cuchillo_clase_id INT NOT NULL
    );

ALTER TABLE revolveres ADD CONSTRAINT fk_revolveres FOREIGN KEY (revolver_clase_id) REFERENCES clases_armas(clase_id);
ALTER TABLE inventario ADD CONSTRAINT fk_inventario1 FOREIGN KEY (inventario_id_arma) REFERENCES revolveres(revolver_id);

ALTER TABLE fusiles_precision ADD CONSTRAINT fk_fusiles_precision FOREIGN KEY (fusil_precision_clase_id) REFERENCES clases_armas(clase_id);
ALTER TABLE inventario ADD CONSTRAINT fk_inventario2 FOREIGN KEY (inventario_id_arma) REFERENCES fusiles_precision(fusil_precision_id);

ALTER TABLE granadas ADD CONSTRAINT fk_granadas FOREIGN KEY (granada_clase_id) REFERENCES clases_armas(clase_id);
ALTER TABLE inventario ADD CONSTRAINT fk_inventario3 FOREIGN KEY (inventario_id_arma) REFERENCES granadas(granada_id);

ALTER TABLE pistolas_semiautomaticas ADD CONSTRAINT fk_pistolas_semiautomaticas FOREIGN KEY (pistola_semiauto_id) REFERENCES clases_armas(clase_id);
ALTER TABLE inventario ADD CONSTRAINT fk_inventario4 FOREIGN KEY (inventario_id_arma) REFERENCES pistolas_semiautomaticas(pistola_semiauto_id);

ALTER TABLE fusiles_asalto ADD CONSTRAINT fk_fusiles_asalto FOREIGN KEY (fusil_asalto_id) REFERENCES clases_armas(clase_id);
ALTER TABLE inventario ADD CONSTRAINT fk_inventario5 FOREIGN KEY (inventario_id_arma) REFERENCES fusiles_asalto(fusil_asalto_id);

ALTER TABLE carabinas ADD CONSTRAINT fk_carabinas FOREIGN KEY (carabina_id) REFERENCES clases_armas(clase_id);
ALTER TABLE inventario ADD CONSTRAINT fk_inventario6 FOREIGN KEY (inventario_id_arma) REFERENCES carabinas(carabina_id);

ALTER TABLE escopetas ADD CONSTRAINT fk_escopetas FOREIGN KEY (escopeta_id) REFERENCES clases_armas(clase_id);
ALTER TABLE inventario ADD CONSTRAINT fk_inventario7 FOREIGN KEY (inventario_id_arma) REFERENCES escopetas(escopeta_id);


ALTER TABLE cuchillo_combate ADD CONSTRAINT fk_cuchillo_combate FOREIGN KEY (cuchillo_id) REFERENCES clases_armas(clase_id);
ALTER TABLE inventario ADD CONSTRAINT fk_inventario8 FOREIGN KEY (inventario_id_arma) REFERENCES cuchillo_combate(cuchillo_id);


-- Insert data into the 'clases_armas' table
INSERT INTO clases_armas (clase_nombre) VALUES
    ('Revólveres'),
    ('Fusiles de Precisión'),
    ('Granadas'),
    ('Pistolas Semiautomáticas'),
    ('Fusiles de Asalto'),
    ('Carabinas'),
    ('Escopetas'),
    ('Cuchillos de Combate');

-- Insert data into the 'revolveres' table
INSERT INTO revolveres (revolver_capacidad, revolver_calibre, revolver_nombre, revolver_pais_origen, revolver_serial, revolver_clase_id) VALUES
    (6, 38, 'Colt Python', 'Estados Unidos', 12345, 1),
    (5, 44, 'Smith & Wesson Model 29', 'Estados Unidos', 67890, 1),
    (7, 357, 'Ruger GP100', 'Estados Unidos', 98765, 1),
    (6, 38, 'Taurus Model 66', 'Brasil', 54321, 1);

-- Insert data into the 'fusiles_precision' table
INSERT INTO fusiles_precision (fusil_precision_capacidad, fusil_precision_calibre, fusil_precision_nombre, fusil_precision_pais_origen, fusil_precision_serial, fusil_precision_clase_id) VALUES
    (5, 7.62, 'Remington 700', 'Estados Unidos', 54321, 2),
    (10, 6.5, 'Accuracy International AX', 'Reino Unido', 98765, 2),
    (8, 7.62, 'Sako TRG', 'Finlandia', 13579, 2),
    (6, 308, 'Savage 10', 'Estados Unidos', 24680, 2);

-- Insert data into the 'granadas' table
INSERT INTO granadas (granada_peso, granada_destruivo, granada_pais_origen, granada_nombre, granada_clase_id) VALUES
    (0.5, 'Sí', 'Estados Unidos', 'M67', 3),
    (0.6, 'Sí', 'Rusia', 'F-1', 3),
    (0.8, 'Sí', 'Alemania', 'DM51', 3),
    (0.4, 'Sí', 'Estados Unidos', 'AN-M14', 3);

-- Insert data into the 'pistolas_semiautomaticas' table
INSERT INTO pistolas_semiautomaticas (pistola_semiauto_capacidad, pistola_semiauto_calibre, pistola_semiauto_nombre, pistola_semiauto_pais_origen, pistola_semiauto_serial, pistola_semiauto_clase_id) VALUES
    (15, 9, 'Glock 17', 'Austria', 13579, 4),
    (10, 45, 'Colt M1911', 'Estados Unidos', 24680, 4),
    (17, 9, 'Smith & Wesson M&P', 'Estados Unidos', 86420, 4),
    (13, 9, 'Beretta 92', 'Italia', 31415, 4);

-- Insert data into the 'fusiles_asalto' table
INSERT INTO fusiles_asalto (fusil_asalto_capacidad, fusil_asalto_calibre, fusil_asalto_nombre, fusil_asalto_pais_origen, fusil_asalto_serial, fusil_asalto_clase_id) VALUES
    (30, 5.56, 'M16', 'Estados Unidos', 24680, 5),
    (25, 7.62, 'AK-47', 'Unión Soviética', 13579, 5),
    (20, 5.56, 'Steyr AUG', 'Austria', 97531, 5),
    (25, 5.56, 'SIG SG 550', 'Suiza', 65432, 5);

-- Insert data into the 'carabinas' table
INSERT INTO carabinas (carabina_capacidad, carabina_calibre, carabina_nombre, carabina_pais_origen, carabina_serial, carabina_clase_id) VALUES
    (20, 5.56, 'Ruger Mini-14', 'Estados Unidos', 86420, 6),
    (15, 7.62, 'H&K G3', 'Alemania', 97531, 6),
    (10, 5.56, 'Beretta ARX 160', 'Italia', 31415, 6),
    (30, 5.56, 'Bushmaster ACR', 'Estados Unidos', 54321, 6);

-- Insert data into the 'escopetas' table
INSERT INTO escopetas (escopeta_capacidad, escopeta_calibre, escopeta_nombre, escopeta_pais_origen, escopeta_serial, escopeta_clase_id) VALUES
    (5, 12, 'Remington 870', 'Estados Unidos', 97531, 7),
    (7, 20, 'Winchester Model 9410', 'Estados Unidos', 31415, 7),
    (4, 12, 'Mossberg 500', 'Estados Unidos', 86420, 7),
    (6, 20, 'Benelli M4', 'Italia', 65432, 7);

-- Insert data into the 'cuchillo_combate' table
INSERT INTO cuchillo_combate (cuchillo_peso, cuchillo_longitu, cuchillo_pais_origen, cuchillo_nombre, cuchillo_clase_id) VALUES
    (0.3, 25, 'Estados Unidos', 'KA-BAR', 8),
    (0.25, 20, 'Alemania', 'Gerber Mark II', 8),
    (0.28, 22, 'Rusia', 'Spetsnaz Machete', 8),
    (0.32, 24, 'Estados Unidos', 'Ontario M9', 8);
