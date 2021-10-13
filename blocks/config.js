module.exports = [
	{
		name : "IRRemote",
		blocks : [
		  'IRRemote_setup',
		  'IRRemote_decode',
		  'IRRemote_Read',
          {
            xml : 
            `<block type="IRRemote_sendNEC">
                <value name="_dataForSend">
                    <shadow type="math_number">
                        <field name="NUM">1086304335</field>
                    </shadow>
                </value>
                <value name="_bit">
                    <shadow type="math_number">
                        <field name="NUM">32</field>
                    </shadow>
                </value>
            </block>`
	       },
			
		]
	}	
];