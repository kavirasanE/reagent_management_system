CREATE TABLE Test_Done (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    Analyte_Name VARCHAR(255),
    col1 INT,
    col2 INT,
    col3 INT,
    col4 INT,
    col5 INT,
    col6 INT,
    col7 INT,
    col8 INT,
    col9 INT,
    col10 INT,
    col11 INT,
    col12 INT,
    col13 INT,
    col14 INT,
    col15 INT,
    col16 INT,
    col17 INT,
    col18 INT,
    col19 INT,
    col20 INT,
    col21 INT,
    col22 INT,
    col23 INT,
    col24 INT,
    col25 INT,
    col26 INT,
    col27 INT,
    col28 INT,
    col29 INT,
    col30 INT,
    col31 INT
);

ALTER TABLE Test_Done
ADD COLUMN total INT;

select * from Test_Done;
truncate Test_Done;

DELIMITER //

CREATE TRIGGER before_update_Test_Done
BEFORE UPDATE ON Test_Done
FOR EACH ROW
BEGIN
    SET NEW.total = NEW.col1 + NEW.col2 + NEW.col3 + NEW.col4 + NEW.col5 + NEW.col6 + 
                    NEW.col7 + NEW.col8 + NEW.col9 + NEW.col10 + NEW.col11 + NEW.col12 + 
                    NEW.col13 + NEW.col14 + NEW.col15 + NEW.col16 + NEW.col17 + NEW.col18 + 
                    NEW.col19 + NEW.col20 + NEW.col21 + NEW.col22 + NEW.col23 + NEW.col24 + 
                    NEW.col25 + NEW.col26 + NEW.col27 + NEW.col28 + NEW.col29 + NEW.col30 + 
                    NEW.col31;
END //

DELIMITER ;





