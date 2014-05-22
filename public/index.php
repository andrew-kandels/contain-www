<?php
chdir(__DIR__ . '/..');
require 'vendor/autoload.php';

$app = new Slim\Slim(array(
    'debug'             => true,
    'templates.path'    => __DIR__ . '/../views',
    'view'              => new Slim\LayoutView,
    'layout'            => 'layout/default.phtml',
));

$app->view->setData('page_title', 'Contain PHP Entity Models');

$app->get('/', function() use ($app) {
    $app->render('index.phtml');
});

$app->run();
