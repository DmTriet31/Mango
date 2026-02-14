const mongoose = require('mongoose');

// Field options for dropdown selections
const fieldOptions = [
    'username',
    'userid', 
    'leavedate',
    'accountcreated',
    'membercount',
    'servername',
    'joindate',
    'timeinguild',
    'none'
];

const thumbnailImageOptions = [
    'userimage',
    'serverimage',
    'none'
];

const leaveSettingsSchema = new mongoose.Schema({
    serverId: { type: String, required: true, unique: true },
    ownerId: { type: String, required: true },
    
    // Channel Leave Settings
    leaveChannelId: { type: String },
    channelStatus: { type: Boolean, default: false },
    
    // DM Settings
    dmStatus: { type: Boolean, default: false },
    
    // Channel Leave Embed Configuration
    channelEmbed: {
        title: { type: String, default: '<:MG_tru1:1472229542658576384>〃 ➜ *New Leave*!' },
        description: { type: String, default: 'Con quỷ {member} đã ra đi. Còn **{membercount}** Con quỷ.' },
        color: { type: String, default: '#ff4757' },
        author: {
            name: { type: String, default: '' },
            iconURL: { type: String, default: '' },
            url: { type: String, default: '' }
        },
        footer: {
            text: { type: String, default: "We'll miss you!" },
            iconURL: { type: String, default: '' }
        },
        thumbnail: { 
            type: { type: String, enum: thumbnailImageOptions, default: 'userimage' }
        },
        image: {
            useWcard: { type: Boolean, default: false },
            customURL: { type: String, default: '' }
        },
        fields: [{
            name: { type: String, default: 'Username' },
            value: { type: String, enum: fieldOptions, default: 'username' },
            inline: { type: Boolean, default: true }
        }, {
            name: { type: String, default: 'Time in Guild' },
            value: { type: String, enum: fieldOptions, default: 'timeinguild' },
            inline: { type: Boolean, default: true }
        }, {
            name: { type: String, default: 'Leave Date' },
            value: { type: String, enum: fieldOptions, default: 'leavedate' },
            inline: { type: Boolean, default: true }
        }]
    },
    
    // DM Leave Embed Configuration
    dmEmbed: {
        title: { type: String, default: 'Thanks for being part of our community!' },
        description: { type: String, default: 'Tại Sao {username} lại bỏ chúng tôi.{servername}. https://discord.gg/hZM6zS9Km7' },
        color: { type: String, default: '#ff4757' },
        footer: {
            text: { type: String, default: 'Hope to see you again!' },
            iconURL: { type: String, default: '' }
        },
        thumbnail: { 
            type: { type: String, enum: thumbnailImageOptions, default: 'serverimage' }
        },
        image: {
            useWcard: { type: Boolean, default: false },
            customURL: { type: String, default: '' }
        }
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('LeaveSettings', leaveSettingsSchema);

