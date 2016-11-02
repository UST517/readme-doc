const mongoose = load( 'mongoose' );

module.exports = new mongoose.Schema( {
    openId: String,
    nickname: String,
    isValid: {
        type: Boolean,
        default: true
    }
}, {
    collection: 'User'
} )