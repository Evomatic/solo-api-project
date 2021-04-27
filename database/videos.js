const { Model } = require('objection');

class Videos extends Model {
    static get tableName() {
        return 'videos';
    }
}
module.exports = Videos;