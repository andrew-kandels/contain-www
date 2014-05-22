Installation
============
The easiest way to install contain is through Composer. Add the following to your composer.json:

    "require": {
        ...
        "akandels/contain": "dev-master"
    }

Then run the update command to download and install Contain into your project.

    php composer.phar update

Definitions
-----------
[Definitions](/documentation/definitions) are classes that define your entity models. Definitions are the 
only files you will ever directly edit. They are later compiled into your actual entity models which you 
use in your application.

Create a new definition somewhere in your project (assuming src/Entity/Definition/User.php):

    namespace MyProject\Entity\Definition;

    use Contain\Entity\AbstractDefinition;

    class User extends AbstractDefinition {
        public function setUp() {
            $this
                ->setNamespace('MyProject\Entity')
                ->registerTarget(AbstractDefinition::ENTITY, __DIR__ . '/..')
                ->setProperty('firstName', 'string', array('required' => true))
                ->setProperty('lastName', 'string', array('required' => true))
            ;
        }
    }

First, we set the namespace which is what our entity model will inherit. This is optional and will be 
guessed if your application follows PSR-0. Second, we define the path to build to, one directory up
form the definition. By default, the entity model will inherit the same name as the definition class, 
*User*. Finally, we define two required properties, first and last name of the string type.

Next, compile your definition into an entity model:

vendor/akandels/contain/scripts/compile src/Entity/Definition/User.php

You should now have an entity model installed at ````src/Entity/User.php```` that you can start 
using in your project:

    $user = new User(array(
        'firstName' => 'Andrew',
        'lastName'  => 'Kandels',
    ));

Next, see [Working with Entity Models](/documentation/working-with-entity-models).
