- Relations we are going to talk about today

  1. One to one
    - Person <-> DNA
    - Person <-> Swimming License
    - Person <-> Birth Certificate
    - Boyfriend <-> Girlfriend

  2. One to many
    - Person <-> Cars  //can also be many to many
    - Person <-> todo Lists
    - Mom <-> Children //depending on your family arrangement

  3. Many to many
    - Person <-> Books
    - Person <-> Favorite Songs
    - Person <-> Cousins

- Steps to add relations

  1. Generate a new migrations file //describe my relation
  2. Edit the file to add a new column
  3. Modify the models, so we can query the relations
  4. Modify the seeds to include the new id's
  5. Write a query to test if it's working