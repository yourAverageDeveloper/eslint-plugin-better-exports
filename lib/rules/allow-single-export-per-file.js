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
    ]
  },

  create: function(context) {
    // variables should be defined here
    

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const getTotalFileExports = (program) => {
      let exportCount = 0;
      for (let i = 0; i < program.body.length ; i++) { 
        if (program.body[i].type === 'ExportNamedDeclaration') 
          exportCount++;
      }
      return exportCount;
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    return {
      Program: (program) => {
        if (getTotalFileExports(program) > 1) {
          context.report({
            loc: {},
            message: 'A component file should have exactly one export',
          })
        } 
      }
    }
  }
};
