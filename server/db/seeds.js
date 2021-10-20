use hotel_bookings;
db.dropDatabase();
db.bookings.insertMany([
    {
        name: "name 1",
        status: "Checked In",
        email: "email@email.com"
    },
    {
        name: "name 2",
        status: "Checked In",
        email: "email2@email.com"
    },
    {
        name: "name 3",
        status: "Checked Out",
        email: "email3@email.com"
    }
]);



















