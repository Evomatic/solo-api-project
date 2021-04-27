const { Model } = require('objection');

class Channels extends Model {
    static get tableName() {
        return 'channels';
    }
    static get relationMapping() {
        const Accounts = require('./accounts');
        return {
            channels: {
                relation: Model.HasOneRelation,
                modelClass: Accounts,
                join: {
                    from: 'channels.accountId',
                    to: 'accounts.id',
                }
            }
        }
    }
}
module.exports = Channels;