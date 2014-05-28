Summary
-------
Contain entity models are compiled into PHP classes you can interact with in your application. They contain setters, getters and other handy methods for interacting with their properties. These methods are written out in the entity model class so they're friendly to auto-complete with IDEs.

Accessor Methods
----------------
Getters and setters allow you to fetch property values easily:
~~~~ .language=php
$user->setFirstName('Andrew');
// or,
$user->set('firstName', 'Andrew');

echo $user->getFirstName(); // Andrew
// or,
$user->get('firstName');
~~~~

Extended Properties
-------------------
Entity models can be extended with meta-properties that aren't accessed with getters or setters or included in any export. Extended properties are often used for meta information such as last editted timestamps, database ids or other hidden properties.

~~~~ .language=php
$user->setExtendedProperty('_id', 1234);
echo $user->getExtendedProperty('_id'); // 1234
~~~~
