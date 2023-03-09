CREATE table customers(cid int PRIMARY KEY AUTO_INCREMENT,
                        customer_name varchar(255) NOT NULL,
                        customer_email varchar(255) UNIQUE NOT NULL,
                        customer_mobile varchar(255) UNIQUE NOT NULL,
                        customer_password varchar(255) NOT NULL);

INSERT INTO customers VALUES (1, 'Shailesh Kumar', 'shailesh7471@gmail.com', '9997847097', 'shailesh'),
                            (2, 'Divya Chauhan', 'divya270594@gmail.com', '9634818259', 'divya'),
                            (3, 'Deepak Chauhan', 'dpak@gmail.com', '9634817728', 'deepak'),
                            (4, 'Madhuri Chauhan', 'mchauhan199@gmail.com', '8279472488', 'madhvi'),
                            (5, 'Sunidhi Chauhan', 'sunidhi@gmail.com', '9410801275', 'sunidhi');