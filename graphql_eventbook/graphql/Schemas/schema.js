const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type login {
        username:String!
        token:String!
    }
    type Event {
        id:ID!
        userUsername:String!
        title:String!
        description:String!
        price:Float!
        date:String!
    }
    type Booking{
        id:ID,
        eventId:Int!,
        userUsername:String!
    }
    input BookingInput{
        eventId:String!
        userUsername:String!
        token:String!
    }
    type User{
        username:String!
    }
    type UserEvents{
        username:String!
        events:[Event!]!
        bookings:[Booking!]!
    }
    input UserInput{
        username:String!,
        password:String!
    }
    input InputEvent{
        title:String!
        description:String!
        price:Float!
        date:String!
        userUsername:String!
        token:String!
    }
    input cancelbooking {
        id:ID!
    }
    type query{
        event : [Event!]!
        user : [UserEvents!]!
        book : [Booking!]!
    }
    type EventB{
        id:ID!
        owner:String!
        title:String!
        description:String!
        date:String!
    }
    type BookingDetails{
        id:ID!,
        event:EventB!
    }
    type create{
        create(event:InputEvent):Event
        createUser(user:UserInput):login
        createBooking(book:BookingInput):Booking
        cancelbooking(cancel:cancelbooking):Boolean
        login(login:UserInput):login
        getmybookings(token:String!):[BookingDetails!]
    }
    schema {
        query:query,
        mutation:create
    }
`);

module.exports = schema;