$('document').ready(function(){ 

    $('#NorthArea').click(function() {

        //console.log("North");

        let area = new SetURL('Norte');
    });

    $('#SouthArea').click(function() {

        //console.log("South");
        
        let area = new SetURL('Sur');
    });

    $('#EastArea').click(function() {

        console.log("East");
    });

     $('#WestArea').click(function() {

        console.log("West");
    });

    $('#CentralArea').click(function() {

        console.log("Central");
    });
  
});

class SetURL {
    constructor(area) {

        this.AreaClicked = area;
        this.AreaSelected();
    }

    AreaSelected() {

        var Areas = [
            "Norte", 
            "Sur"
        ];

        for(var i = 0; i < Areas.length; i++)
        {
            if(this.AreaClicked == Areas[i]) {
                
                console.log(this.AreaClicked);

            } else {

                console.log("Not exist");
            }
        }
    }
}