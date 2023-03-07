Installation


console docker:
cd www/symfony
composer create-project symfony/skeleton ux
cd restapi
composer require webapp
composer require symfony/apache-pack
composer require symfony/maker-bundle --dev
composer require migrations
composer require symfony/string


composer require symfony/ux-react
composer reuire symfony/webpack-encore-bundle
composer require --dev orm-fixtures


Browser
Ouvrir http://localhost/symfony/restapi/public/api

Changer dans fichier D:\www\symfony\restapi\.env
DATABASE_URL="postgresql://postgres:root@postgres:5432/app?serverVersion=15&charset=utf8"


Creer la base donnee app
console docker
php bin/console doctrine:database:create
php bin/console make:migration
yes

Creer fixtures
php bin/console doctrine:fixtures:load


#generer une entité
php bin/console make:entity


YARN

yarn add @mui/icons-material @mui/material

BookDataGrid
yarn add @mui/x-data-grid