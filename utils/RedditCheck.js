
// The main list
const sortlist = [
    "new",
    "top",
    "hot",
  ];

function Check(args) {
    // Set the values
    let sort;
    let limit;

    // if we have both args
    if (args[0] && args[1]) {
        
        // If args[0] is a number
        if (!isNaN(args[0])){

        rounded = Math.round(args[0])
            if (rounded<=5){

                // Set the limit
                limit = rounded
                
            // let the limit be 1 if the input is over 5
            } else limit = 1
        
            // check if sort is in list
        } else if (args[0].toLowerCase() == "new" || args[0].toLowerCase() == "hot" || args[0].toLowerCase() == "top"){
            // Set the sort
            sort = args[0].toLowerCase()
            
            // randomize sort if its not in the list
        } else sort = sortlist[Math.floor(Math.random() * sortlist.length)];
        
        // if args[1] is a number
        if (!isNaN(args[1])){

            // round args[1]
            rounded = Math.round(args[1])

            // If the input isbigger than 5
            if (rounded <= 5){
                // Set the limit as the input
                limit = rounded

            // If input is over 5 then set limit as 1
            } else limit = 1

            // if args[1] is in the topic list
            } else if (args[1].toLowerCase() == "new" || args[0].toLowerCase() == "hot" || args[0].toLowerCase() == "top"){
                // Set the value
                sort = args[1].toLowerCase()

                // let sort be 
            } else sort = sortlist[Math.floor(Math.random() * sortlist.length)];
        
    // If we only have args[0]
    } else if (args[0]) {
                
        // if Args[0] is a number
        if (!isNaN(args[0])){

        // Round arg[0]
        rounded = Math.round(args[0])

        if (rounded <=5){
            // return the value
            limit = rounded
            // Set the sort
            sort = sortlist[Math.floor(Math.random() * sortlist.length)];

        // If over limit then set to 1 and set the random sort
        } else limit = 1, sort = sortlist[Math.floor(Math.random() * sortlist.length)];
        
        } else if (args[0].toLowerCase() == "new" || args[0].toLowerCase() =="hot" || args[0].toLowerCase() == "top"){
            
            // sort the text to lower case
            sort = args[0].toLowerCase();

            // set limit as 1 since we don't have the limit defined
            limit = 1;

        // Set the random sort if the input is not in the list
        } else limit = 1 , sort = sortlist[Math.floor(Math.random() * sortlist.length)];

        } else {
            // if we don't have either inputs or catch an error, just randomize:
            
            // Randomize sort
            sort = sortlist[Math.floor(Math.random() * sortlist.length)];
            
            // Set limit
            limit = 1;
        };
    
    // Return the values in a tuple
    return [sort, limit];
};

module.exports = Check