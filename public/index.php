<?php
chdir(__DIR__ . '/..');
require 'vendor/autoload.php';

$app = new Slim\Slim(array(
    'debug'             => true,
    'templates.path'    => __DIR__ . '/../views',
    'view'              => new Slim\LayoutView,
    'layout'            => 'layout/default.phtml',
));

$app->hook('slim.before.router', function () use ($app) { 
    // Pass in the App so we can use urlFor() to generate routes 
    $app->view->setData('app', $app);
    $app->view->setData('page_title', 'Contain PHP Entity Models');
    $app->view->setData('markdown', false);
});

Slim\Route::setDefaultConditions(array(
    'page' => '[A-Za-z0-9\-]{3,200}',
));

$app->get('/', function() use ($app) {
    $app->render('index.phtml');
})->name('home');

$app->get('/documentation', function() use ($app) {
    $app->view->setData('markdown', true);
    $app->render('documentation/index.md');
})->name('documentation');

$app->get('/documentation/:page', function($page) use ($app) {
    $app->view->setData('markdown', true);
    $app->render('documentation/' . $page . '.md');
})->name('documentation-page');

$app->get('/add-ons', function() use ($app) {
    $app->render('add-ons.phtml');
})->name('add-ons');

$app->get('/gh-deploy', function() use ($app) {
    exec('git pull', $output, $retval);
    $app->stop();
});

$app->run();
