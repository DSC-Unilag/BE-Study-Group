function calcGrade(value) {
    if (value < 40)
    return "Your score is F";
    if (value < 45)
    return "Your score is E";
    if (value < 50)
    return "Your score is D";
    if (value < 60)
    return "Your score is C";
    if (value < 70)
    return "Your score is B";
    else 
    return "Your Score is A"
    }
    
    console.log(calcGrade(80));
    
    
    // Begining of Assignment 2
function calcPh(value) {
    if ( (value < 0) || (value > 14) )
    return "Invalid";
    if (value > 7)
    return "The Value is Alkaline";
    if (value < 7)
    return "The Value is Acidic";
    if (value === 7)
    return "The Value is Neutral";
    }
    
    console.log(calcPh(12));