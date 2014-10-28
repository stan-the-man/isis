var Schedule = {
    fall: [],
    winter: [],
    spring: [],
    requirements: {
        "Natural Science" : true,
        "MATH 11" : true,
        "MATH 12" : true,
        "CHEM 11" : true,
        "COEN 10" : true,
        "COEN 11" : true,
        "PHYS 31" : true,
        "PHYS 33" : true  
    },

    reset: function() {
        this.fall = [];
        this.winter = [];
        this.spring = [];
        this.futureClasses = [];
    },

    mathTrack: [
        courses["MATH 11"], 
        courses["MATH 12"], 
        courses["MATH 13"], 
        courses["MATH 14"], 
        courses["AMTH 108"]
    ],
    
    futureClasses: [],

    setMath: function(level) {
        if (level == 11) {
            this.requirements["MATH 11"] = true;
            this.requirements["MATH 12"] = false;
        } else if (level == 12) {
            this.requirements["MATH 11"] = true;
            this.requirements["MATH 12"] = true;
        } else {
            this.requirements["MATH 11"] = false;
            this.requirements["MATH 12"] = false;
        }
    },

    setNaturalScience: function(has) {
        this.requirements["Natural Science"] = has;
    },

    setChemistry: function(has) {
        this.requirements["CHEM 11"] = has;
    },

    setCoen: function(credit) {
        if (level == 10) {
            this.requirements["COEN 10"] = true;
            this.requirements["COEN 11"] = false;
        } else if (level == 11) {
            this.requirements["COEN 10"] = true;
            this.requirements["COEN 11"] = true;
        } else {
            this.requirements["COEN 10"] = false;
            this.requirements["COEN 11"] = false;
        }
    },

    setPhysics: function(level) {
        if (level == 31) {
            this.requirements["PHYS 31"] = true;
            this.requirements["PHYS 33"] = false;
        } else if (level == 33) {
            this.requirements["PHYS 31"] = true;
            this.requirements["PHYS 33"] = true;
        } else {
            this.requirements["PHYS 31"] = false;
            this.requirements["PHYS 33"] = false;
        }
    },


    addENGR1: function() {
        var fallLabs = 0;
        var winterLabs = 0;
        var springLabs = 0;
        var tempLabCounter = 0;

        function hasLab(course) {
            if (course.hasLab)
                tempLabCounter++;
        };

        /* iterate through fall */
        this.fall.forEach(hasLab);
        fallLabs = tempLabCounter;

        /* reset and iterate through winter */
        tempLabCounter = 0;
        this.winter.forEach(hasLab);
        winterLabs = tempLabCounter;

        /* reset and iterate through spring */
        tempLabCounter = 0;
        this.spring.forEach(hasLab);
        springLabs = tempLabCounter;


        if (fallLabs <= winterLabs) {
            if (fallLabs <= springLabs)
                this.fall.push(courses["ENGR 1"]);
            else
                this.spring.push(courses["ENGR 1"]);
        } else {
            if (winterLabs <= springLabs)
                this.winter.push(courses["ENGR 1"]);
            else
                this.spring.push(courses["ENGR 1"]);
        }

        //add to quarter with least labs
    },

    numberOfCore: function(quarter) {
        var number = 0;
        for (var i = 0; i < this[quarter].length; i++) {
            if (this[quarter][i].subject == "core")
                number++;
        }

        return number;
    },

    moveCourse: function(courseName, newQuarter, oldQuarter) {
        var index = -1;
        for (var i = 0; i < this[oldQuarter].length; i++)
            if (this[oldQuarter][i].name == courseName)
                index = i;
        if (index == -1)
            return false;
        this[oldQuarter].splice(index, 1);
        this[newQuarter].push(courses[courseName]);
        return true;
    },

    fillHoles: function() {
        //if two consecutive quarters empty, add C&I
        if (this.fall.length < 4 && this.winter.length < 4) {
            this.fall.push(courses["C&I 1"]);
            this.winter.push(courses["C&I 2"]);
        } else if (this.winter.length < 4 && this.spring.length < 4) {
            this.winter.push(courses["C&I 1"]);
            this.spring.push(courses["C&I 2"]);
        } else if (this.fall.length < 4 && this.spring.length < 4) {
            this.fall.push(courses["C&I 1"]);
            this.spring.push(courses["C&I 2"]);
        }
        
        //if fall has two cores and a blank spot, move coen12
        if (this.numberOfCore("fall") == 2 && this.fall.length < 4)
            this.moveCourse("COEN 12", "fall", "spring");
        if ((this.numberOfCore("winter") >= 2 && this.winter.length < 4) || this.winter.length <= 2)
            this.winter.push(this.futureClasses.pop());
        if ((this.numberOfCore("spring") >= 2 && this.spring.length < 4) || this.spring.length <= 2)
            this.spring.push(this.futureClasses.pop());

        //if fall has two cores and a blank spot, move coen12
        if (this.numberOfCore("fall") == 2 && this.fall.length < 4)
            this.moveCourse("COEN 12", "fall", "spring");
    
        while (this.fall.length < 4) {
            this.fall.push(courses["Core"]);
        }
        while (this.winter.length < 4) {
            this.winter.push(courses["Core"]);
        }
        while (this.spring.length < 4) {
            this.spring.push(courses["Core"]);
        }
    },

    generate: function() {
        this.reset();
    
        //CTW
        this.fall.push(courses["CTW 1"]);
        this.winter.push(courses["CTW 2"]);
    
        //Math
        var studentMathTrack;
        if (this.requirements["MATH 11"] == true && this.requirements["MATH 12"] == false)
            studentMathTrack = this.mathTrack.slice(1);
        else if (this.requirements["MATH 11"] == true && this.requirements["MATH 12"] == true)
            studentMathTrack = this.mathTrack.slice(2);
        else
            studentMathTrack = this.mathTrack.slice(0);

        studentMathTrack.reverse();
        this.fall.push(studentMathTrack.pop());
        this.winter.push(studentMathTrack.pop());
        this.spring.push(studentMathTrack.pop());
    
        //COEN
        if (this.requirements["COEN 10"] == false)
            this.fall.push(courses["COEN 10"]);
        if (this.requirements["COEN 11"] == false)
            this.winter.push(courses["COEN 11"]);
        this.spring.push(courses["COEN 12"]);
    },

    coen: function() {
        // Math and COEN
        this.generate();

        //Science
        if (this.requirements["CHEM 11"] == false)
            this.fall.push(courses["CHEM 11"]);
        if (this.requirements["PHYS 31"] == false)
            this.winter.push(courses["PHYS 31"]);
        this.spring.push(courses["PHYS 32"]);

        //COEN 19
        this.spring.push(courses["COEN 19"]);
        
        //add future classes if there are a lot of holes
        this.futureClasses.push(courses["COEN 21"]);
        this.futureClasses.push(courses["COEN 20"]);
        this.futureClasses.reverse();
    
        this.fillHoles();
        this.addENGR1();
        this.print();
    },

    web: function() {
        //Math and COEN
        this.generate();
    
        //Science
        if (this.requirements["Natural Science"] == false)
            this.fall.push(courses["Natural Science"]);
        
        //add future classes if there are a lot of holes
        this.futureClasses.push(courses["COMM 2"]);
        this.futureClasses.push(courses["COMM 12"]);
        this.futureClasses.reverse();
        debugger;
    
        this.fillHoles();
        this.addENGR1();
        this.print();
    },

    print: function() {
        var listOfClasses = "Fall: ";
        for (var i = 0; i < this.fall.length; i++)
            listOfClasses += this.fall[i].name + " ";
        listOfClasses += "\nWinter: ";
        for (var i = 0; i < this.winter.length; i++)
            listOfClasses += this.winter[i].name + " ";
        listOfClasses += "\nSpring: ";
        for (var i = 0; i < this.spring.length; i++)
            listOfClasses += this.spring[i].name + " ";
        alert(listOfClasses);
    },
};
