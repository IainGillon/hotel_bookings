use hotel_bookings;
db.dropDatabase();
db.bookings.insertMany([
    {
        name: "name 1",
        checked_in: true,
        email: "email@email.com"
    },
    {
        name: "name 2",
        checked_in: true,
        email: "email2@email.com"
    },
    {
        name: "name 3",
        checked_in: false,
        email: "email3@email.com"
    }
]);



















