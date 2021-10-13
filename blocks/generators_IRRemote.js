  Blockly.JavaScript['IRRemote_setup'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var number_pin = block.getFieldValue('pin'); 
  var code = `
    #EXTINC#include "IRremote.h"#END
    #VARIABLE IRrecv ${variable_instance}(${number_pin});#END
    #VARIABLE decode_results results;#END
    ${variable_instance}.enableIRIn();\n`;
  return code;
  };
Blockly.JavaScript['IRRemote_Read'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_dht_type = block.getFieldValue('dht_type');
    var code = `(results.value)`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['IRRemote_sendNEC'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var number_pin = block.getFieldValue('pin'); 
    var value_dataForSend = Blockly.JavaScript.valueToCode(block, '_dataForSend', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_bit = Blockly.JavaScript.valueToCode(block, '_bit', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    //var value_dataSend = value_dataForSend.substring(8,(value_dataForSend.length)-2);
    var code = `
    #EXTINC#include "IRremote.h"#END
    #VARIABLE IRsend ${variable_instance}(${number_pin});#END
    ${variable_instance}.sendNEC(${value_dataForSend},${value_bit});\n`;
    return code;
  };

  Blockly.JavaScript['IRRemote_readHumid'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readHumidity()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['IRRemote_decode'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'HANDLER');
  var code = `
    if(${variable_instance}.decode(&results)) \n{${statements_code}\n${variable_instance}.resume();}\n`;
  return code;
  };

