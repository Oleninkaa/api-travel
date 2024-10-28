
const mongoose = require('mongoose');

const TripSchema = mongoose.Schema(
    {

        country:{
            type: String,
            required: [true, "country name is required"],
        },

        place:{
            type: String,
            required: [true, "place is required"],
        },

        price:{
            type: Number,
            required: [true, "price is required"],
            default: 0,
        },

        date:{
            type: Date,
            required: [true, "date is required"],
        }

    },

    {
        timestamps:true
    }


);


const Trip = mongoose.model("Trip", TripSchema)

module.exports = Trip;