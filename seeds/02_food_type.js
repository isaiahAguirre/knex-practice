/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Dinosaur Bones', description: 'some stuff about food'},
    {id: 2, name: 'Gourmet Mush', description: 'some stuff about food'},
    {id: 3, name: 'Dragon-Fish Flakes', description: 'some stuff about food'}

  ]);
};
