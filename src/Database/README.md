Follow the following steps to run the code:

* Setup :
    1. For linux distros:  
        ```sudo apt-get install mysql-server```  
        ```mysql secure_installation```  
        ```sudo mysql -u root -p```  (Incase it prompts for a root password while installation)  
        ```sudo mkdir /var/run/mysqld; sudo chown mysql /var/run/mysqld; sudo mysqld_safe --skip-grant-tables&```  (else)  
        ```GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY 'password';``` ( To create account in local server)  
        ```mysql -u username -p``` (login to create/alter databases, check whether they are working)  
    
        Run demo.js and query_test.js to confirm affects in mysql server

    2. Windows: 
        https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html  (follow this link :P)

* Database creation :  
    run ```node creation_db.js```

* Table creation :  
    run ```node creation_table.js```