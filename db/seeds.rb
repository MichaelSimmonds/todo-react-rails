# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.create(title: 'Go shopping', due_date: Date.tomorrow, description: 'Go into Leiden market')
Task.create(title: 'Fix shelf', due_date: Date.tomorrow, description: 'Trip to the hardware store')
Task.create(title: 'Make dinner', due_date: Date.tomorrow, description: 'Pizza on the menu')
