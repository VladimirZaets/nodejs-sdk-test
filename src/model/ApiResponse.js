/*
* Garage Week 2021. All rights reserved.
* Your custom license text goes here.
*/

import ApiClient from '../ApiClient';

/**
 * The ApiResponse model module.
 * @module model/ApiResponse
 * @version 1.1.4
 */
class ApiResponse {
    /**
     * Constructs a new <code>ApiResponse</code>.
     * @alias module:model/ApiResponse
     */
    constructor() { 
        
        ApiResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiResponse} obj Optional instance to populate.
     * @return {module:model/ApiResponse} The populated <code>ApiResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiResponse();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} code
 */
ApiResponse.prototype['code'] = undefined;

/**
 * @member {String} type
 */
ApiResponse.prototype['type'] = undefined;

/**
 * @member {String} message
 */
ApiResponse.prototype['message'] = undefined;






export default ApiResponse;

