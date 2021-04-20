/**
 * @fileoverview Use this rule to match the name and casing of a file exactly with the what's being exported out of it.
 * @author yourAverageDeveloper
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Use this rule to match the name and casing of a file exactly with the what's being exported out of it.",
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
    const fileNameArray = context.getFilename().split('\\');
    const fileName = fileNameArray[fileNameArray.length - 1].split('.')[0];

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const componentMatchesFileName = (program) => {
      let matched = true;
      for (let i = 0; i < program.body.length ; i++) {
        if (program.body[i].declaration.declarations[0].id.name !== fileName)
          matched = false;
      }
      return matched;
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    return {
      Program: (program) => {
        if (componentMatchesFileName(program)) {
          context.report({
            loc: {},
            message: 'Exported component name should match component file name'
          })
        }
      }
    }
  }
};
