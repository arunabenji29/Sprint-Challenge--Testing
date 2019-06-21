
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {"title": 'Pacman',"genre":"Arcade","releaseYear":1980},

      ]);
    });
};
