/*
* Garage Week 2021. All rights reserved.
* Your custom license text goes here.
*/

import ApiClient from '../ApiClient';

/**
 * The User model module.
 * @module model/User
 * @version 1.1.3
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('userStatus')) {
                obj['userStatus'] = ApiClient.convertToType(data['userStatus'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
User.prototype['id'] = undefined;

/**
 * @member {String} username
 */
User.prototype['username'] = undefined;

/**
 * @member {String} firstName
 */
User.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
User.prototype['lastName'] = undefined;

/**
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * @member {String} password
 */
User.prototype['password'] = undefined;

/**
 * @member {String} phone
 */
User.prototype['phone'] = undefined;

/**
 * User Status
 * @member {Number} userStatus
 */
User.prototype['userStatus'] = undefined;






export default User;

