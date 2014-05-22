Performance
===========
One of the reasons Contain was written was to enable an application with enormous load
to use a rich data model without the performance cost of an ORM. This simplified 
development and allowed us more fine-grained control over syncing the models to our
data store. 

Because of this use case, Contain has been heavily optimized to keep its memory 
usage very low. Hundreds or thousands of objects can be iterated with great performance.

The following sections demonstrate some of the ways this was achieved.

Definitions
-----------
Contain uses class definitions to define entity models. A compiler is run when the 
definition classes change which generates PHP code that represents the entity model 
itself. Setters, getters and other methods are generated, keeping them fast and allowing 
your IDE to leverage features like code completion.

Object Instantiation
--------------------
One of the most expensive things in PHP is creating objects. In contain, objects represent
the properties of an entity, their types and the entity itself. You might think a 
single entity with dozens of properties would result in the creation of hundreds of 
objects; but it doesn't:

* Entities contain a single pivoting object representing a property. That object is serialized and deserialized from arrays internally when leveraging getters and setters. Even with hundreds of properties, only one object ever exists.
* Internally, entities store their data in scalar-type arrays. Dates and other objects are exported into scalars and only hydrated into their native objects as needed.
* A type factory maintains a single instance for all types and custom types globally.
* A Cursor class exists for creating entity cursors for iteration which uses a single entity / slow-hydration approach for iterating hundreds of objects without ever instantiating more than one.
