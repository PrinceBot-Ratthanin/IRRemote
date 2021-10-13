Blockly.Blocks['IRRemote_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("IRRemote1",null,["Plugin.IRRemoteEsp"],["Plugin.IRRemoteEsp"]), "instance")
        .appendField("Setup pin for Read")
        .appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pin");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['IRRemote_Read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("IRRemote1",null,["Plugin.IRRemoteEsp"],["Plugin.IRRemoteEsp"]), "instance")
        .appendField("Read after decode");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour(165);
 this.setTooltip("setup sensor DHT ");
 this.setHelpUrl("");
  }
};
Blockly.Blocks["IRRemote_decode"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("IRRemote1",null,["Plugin.IRRemoteEsp"],["Plugin.IRRemoteEsp"]), "instance")
        .appendField('.Decode')
    this.appendStatementInput('HANDLER');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['IRRemote_sendNEC'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("IRRemote_Send1",null,["Plugin.IRRemoteEsp"],["Plugin.IRRemoteEsp"]), "instance")
        .appendField("pin")
        .appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pin");
    this.appendValueInput("_dataForSend")
        .appendField("Send:");
    this.appendValueInput("_bit")
        .setCheck("Number")
        .appendField("Bit:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};

/*Blockly.Blocks['IRRemote_readTemp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("IRRemote1",null,["Plugin.IRRemoteEsp"],["Plugin.IRRemoteEsp"]), "instance")
        .appendField("read temperature °C");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read temperature in Celsius");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['IRRemote_readHumid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("IRRemote1",null,["Plugin.IRRemoteEsp"],["Plugin.IRRemoteEsp"]), "instance")
        .appendField("read humidity %");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};*/