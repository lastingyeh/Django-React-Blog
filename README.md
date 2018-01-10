### REACT V.S. Python Django APIs.

#### Server

##### setup

1. create virtualenv
    
    > virtualenv [virtualenv-name]

2. activate virtualenv

    > source [virtualenv-name]/bin/activate

3. install packages for Django.

    (virtualenv-name) > pip install -r requirements.txt

4. create project

    (virtualenv-name) > django-admin startproject [project-name]

5. create app

    (virtualenv-name) / [project-name] > python manage.py startapp [app-name]

6. runserver

    (virtualenv-name) / [project-name] > python manage.py runserver

#### Client

##### setup

1. NPM install

    > npm install (or yarn install)

2. create webpack.config.js

3. create /src/ and files

4. run dev-server

    > npm run dev

#### Refs. 

1. Demo from vinitraj10.[Django-React-Blog](https://github.com/vinitraj10/Django-React-Blog)

2. [REST framework JWT Auth](https://getblimp.github.io/django-rest-framework-jwt/)

3. [django-cors-headers](https://github.com/ottoyiu/django-cors-headers)

4. [django-rest-auth](http://django-rest-auth.readthedocs.io/en/latest/)