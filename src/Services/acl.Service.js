const aclConfig = require('../config/acl.config')
const acl = require('express-acl')

const loadAclRules = (req, res, next) => {
    let configObject = {
        defaultRole : 'anonymous',
        baseUrl: 'api/v1',
        'rules':[{
            "group" : "customer",
            "permissions" : [
              {
                "resource" : "*",
                "methods" : "*",
                "action" : "deny"
              }
            ]
          },
          {
            "group" : "anonymous",
            "permissions" : [
                {
                    "resource" : "user/login",
                    "methods" : ["POST"],
                    "action" : "allow"
                },
                {
                    "resource" : "user/register",
                    "methods" : ["POST"],
                    "action" : "allow"
                },
                {
                  "resource" : "blog-posts",
                  "methods" : ["GET"],
                  "action" : "allow"
                }
            ]
          },
          {
            "group": "admin",
            "permissions": [
              {
                "resource": "*",
                "methods": "*",
                "action": "allow"
              }
            ]
          }
        ]
      };
    let responseObject = {
        status: 'Access Denied',
        error: req.decoded.role+' not have access for '+req.url
    };
    acl.config(configObject, responseObject)
    next()
}

module.exports = {loadAclRules}