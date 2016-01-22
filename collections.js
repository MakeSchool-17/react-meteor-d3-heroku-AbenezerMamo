Hours = new Meteor.collection("Hours")

Meteor.methods({

insertHour: function(){
check(hour, Number)
check(date, Date)

}

removeHour: function(){
check(id, String)

}

    
)};
