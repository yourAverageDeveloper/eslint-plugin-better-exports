/**
 * @fileoverview Use this rule to allow only one thing to be exported out from a file
 * @author yourAverageDeveloper
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Use this rule to allow only one thing to be exported out from a file",
      category: "Fill me in",
      recommended: true
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
    type: "problem"
  },

  create: function(context) {
    // variables should be defined here
    let exportCount = 0;
    
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    return {
      Program: (program) => {
        for (let i = 0; i < program.body.length ; i++) { 
          if (program.body[i].type === 'ExportNamedDeclaration') {
            if (++exportCount > 1) {
              context.report({
                node: program.body[i],
                message: 'A component file should have exactly one export',
              })
            }
          }
        }
      }
    }
  }
};
