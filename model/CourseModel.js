var fallQuarter = [];
var winterQuarter = [];
var springQuarter = [];

var mathTrack = [courses["MATH 11"], courses["MATH 12"], courses["MATH 13"], courses["MATH 14"], courses["AMTH 108"]];

var possibleReqs = {"Natural Science" : true,
                    "MATH 11" : true,
                    "MATH 12" : true,
                    "CHEM 11" : true,
                    "COEN 10" : true,
                    "COEN 11" : true,
                    "PHYS 31" : true,
                    "PHYS 33" : true};

function toggleMathCredit(level) {
    if (level == 11) {
        possibleReqs["MATH 11"] = true;
        possibleReqs["MATH 12"] = false;
    } else if (level == 12) {
        possibleReqs["MATH 11"] = true;
        possibleReqs["MATH 12"] = true;
    } else {
        possibleReqs["MATH 11"] = false;
        possibleReqs["MATH 12"] = false;
    }
}

function toggleNaturalScienceCredit(has) {
    possibleReqs["Natural Science"] = has;
}

function toggleChemistryCredit(has) {
    possibleReqs["CHEM 11"] = has;
}

function toggleCOENCredit(level) {
    if (level == 10) {
        possibleReqs["COEN 10"] = true;
        possibleReqs["COEN 11"] = false;
    } else if (level == 11) {
        possibleReqs["COEN 10"] = true;
        possibleReqs["COEN 11"] = true;
    } else {
        possibleReqs["COEN 10"] = false;
        possibleReqs["COEN 11"] = false;
    }
}

function togglePhysicsCredit(level) {
    if (level == 31) {
        possibleReqs["PHYS 31"] = true;
        possibleReqs["PHYS 33"] = false;
    } else if (level == 33) {
        possibleReqs["PHYS 31"] = true;
        possibleReqs["PHYS 33"] = true;
    } else {
        possibleReqs["PHYS 31"] = false;
        possibleReqs["PHYS 33"] = false;
    }
}

function createCOENSchedule() {
    //Math and COEN
    createGeneralSchedule();
    
    //Science
    //var studentScienceTrack = [];
    if (possibleReqs["CHEM 11"] == false)
        fallQuarter.push(courses["CHEM 11"]);
    if (possibleReqs["PHYS 31"] == false)
        winterQuarter.push(courses["PHYS 31"]);
    springQuarter.push(courses["PHYS 32"]);
    /*if (possibleReqs["PHYS 33"] == false)
        studentScienceTrack.push(courses["PHYS 33"]);
    studentScienceTrack.reverse();
    fallQuarter.push(studentScienceTrack.pop());
    if (studentScienceTrack.length > 0)
        winterQuarter.push(studentScienceTrack.pop());
    if (studentScienceTrack.length > 0)
        springQuarter.push(studentScienceTrack.pop());*/
    
    //COEN 19
    springQuarter.push(courses["COEN 19"]);
    
    fillHoles();
    addENGR1();
    printScheduleForDebugging();
}

function createWDESchedule() {
    //Math and COEN
    createGeneralSchedule();
    
    //Science
    if (possibleReqs["Natural Science"] == false)
        fallQuarter.push(courses["Natural Science"]);
    
    fillHoles();
    addENGR1();
    printScheduleForDebugging();
}

function createGeneralSchedule() {
    //erase previous schedule
    fallQuarter = [];
    winterQuarter = [];
    springQuarter = [];
    
    //CTW
    fallQuarter.push(courses["CTW 1"]);
    winterQuarter.push(courses["CTW 2"]);
    
    //Math
    var studentMathTrack;
    if (possibleReqs["MATH 11"] == true && possibleReqs["MATH 12"] == false)
        studentMathTrack = mathTrack.slice(1);
    else if (possibleReqs["MATH 11"] == true && possibleReqs["MATH 12"] == true)
        studentMathTrack = mathTrack.slice(2);
    else
        studentMathTrack = mathTrack.slice(0);
    studentMathTrack.reverse();
    fallQuarter.push(studentMathTrack.pop());
    winterQuarter.push(studentMathTrack.pop());
    springQuarter.push(studentMathTrack.pop());
    
    //COEN
    if (possibleReqs["COEN 10"] == false)
        fallQuarter.push(courses["COEN 10"]);
    if (possibleReqs["COEN 11"] == false)
        winterQuarter.push(courses["COEN 11"]);
    springQuarter.push(courses["COEN 12"]);
}

function fillHoles() {
    //if two consecutive quarters empty, add C&I
    if (fallQuarter.length < 4 && winterQuarter.length < 4) {
        fallQuarter.push(courses["C&I 1"]);
        winterQuarter.push(courses["C&I 2"]);
    } else if (winterQuarter.length < 4 && springQuarter.length < 4) {
        winterQuarter.push(courses["C&I 1"]);
        springQuarter.push(courses["C&I 2"]);
    } else if (fallQuarter.length < 4 && springQuarter.length < 4) {
        fallQuarter.push(courses["C&I 1"]);
        springQuarter.push(courses["C&I 2"]);
    }
    
    while (fallQuarter.length < 4) {
        fallQuarter.push(courses["Core"]);
    }
    while (winterQuarter.length < 4) {
        winterQuarter.push(courses["Core"]);
    }
    while (springQuarter.length < 4) {
        springQuarter.push(courses["Core"]);
    }
}

function addENGR1() {
    var fallLabs = 0;
    var winterLabs = 0;
    var springLabs = 0;
    var tempLabCounter = 0;
    function hasLab(course) {
        if (course.hasLab)
            tempLabCounter++;
    }
    fallQuarter.forEach(hasLab);
    fallLabs = tempLabCounter;
    tempLabCounter = 0;
    winterQuarter.forEach(hasLab);
    winterLabs = tempLabCounter;
    tempLabCounter = 0;
    springQuarter.forEach(hasLab);
    springLabs = tempLabCounter;
    if (fallLabs <= winterLabs) {
        if (fallLabs <= springLabs)
            fallQuarter.push(courses["ENGR 1"]);
        else
            springQuarter.push(courses["ENGR 1"]);
    }
    else {
        if (winterLabs <= springLabs)
            winterQuarter.push(courses["ENGR 1"]);
        else
            springQuarter.push(courses["ENGR 1"]);
    }
    //add to quarter with least labs
}    

function printScheduleForDebugging() {
    var listOfClasses = "Fall: ";
    for (var i = 0; i < fallQuarter.length; i++)
        listOfClasses += fallQuarter[i].name + " ";
    listOfClasses += "\nWinter: ";
    for (var i = 0; i < winterQuarter.length; i++)
        listOfClasses += winterQuarter[i].name + " ";
    listOfClasses += "\nSpring: ";
    for (var i = 0; i < springQuarter.length; i++)
        listOfClasses += springQuarter[i].name + " ";
    alert(listOfClasses);
}

