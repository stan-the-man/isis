var Schedule = {
    fall: [],
    winter: [],
    spring: [],
    requirements: {
        "Natural Science" : false,
        "MATH 9" : true,
        "MATH 11" : true,
        "MATH 12" : true,
        "MATH 13" : false,
        "CHEM 11" : true,
        "AMTH 106": true,
        "COEN 10" : true,
        "COEN 11" : false,
        "PHYS 31" : false,
        "PHYS 32" : false,
        "PHYS 33" : false  
    },
    currentMajor: "coen",
    
    chemReplacement: null,
    amthReplacement: null,


    changeMajor: function() {
        if(this.currentMajor == 'coen') {
            this.currentMajor = 'web';
            this.web();
        } else {
            this.currentMajor = 'coen';
            this.coen();
        }
    },

    reset: function() {
        this.fall = [];
        this.winter = [];
        this.spring = [];
        this.futureClasses = [];
    },

    resetReq: function() {
        this.requirements = {
            "Natural Science" : false,
            "MATH 9" : true,
            "MATH 11" : false,
            "MATH 12" : false,
            "MATH 13" : false,
            "CHEM 11" : false,
            "AMTH 106": false,
            "COEN 10" : false,
            "COEN 11" : false,
            "PHYS 31" : false,
            "PHYS 32" : false,
            "PHYS 33" : false  
        };
        this.chemReplacement = null;
        this.amthReplacement = null;
    },

    mathTrackCoen: [
        courses["MATH 11"], 
        courses["MATH 12"], 
        courses["MATH 13"], 
        courses["MATH 14"],
        courses["AMTH 106"],
        courses["AMTH 108"],
        courses["MATH 53"]
    ],
    
    mathTrackWeb: [
        courses["MATH 11"], 
        courses["MATH 12"], 
        courses["MATH 13"], 
        courses["MATH 14"], 
        courses["AMTH 108"],
        courses["MATH 53"]
    ],
    
    futureClasses: [],
    
    setMath: function(level) {
        if (level == 9) {
            this.requirements["MATH 9"] = false;
            this.requirements["MATH 11"] = false;
            this.requirements["MATH 12"] = false;
            this.requirements["MATH 13"] = false;
        } else if (level == 11) {
            this.requirements["MATH 9"] = true;
            this.requirements["MATH 11"] = true;
            this.requirements["MATH 12"] = false;
            this.requirements["MATH 13"] = false;
        } else if (level == 12) {
            this.requirements["MATH 9"] = true;
            this.requirements["MATH 11"] = true;
            this.requirements["MATH 12"] = true;
            this.requirements["MATH 13"] = false;
        } else if (level == 13) {
            this.requirements["MATH 9"] = true;
            this.requirements["MATH 11"] = true;
            this.requirements["MATH 12"] = true;
            this.requirements["MATH 13"] = true;
        } else {
            this.requirements["MATH 9"] = true;
            this.requirements["MATH 11"] = false;
            this.requirements["MATH 12"] = false;
            this.requirements["MATH 13"] = false;
        }
    },

    setNaturalScience: function(has) {
        this.requirements["Natural Science"] = has;
    },

    setChemistry: function(has) {
        this.requirements["CHEM 11"] = has;
    },

    setCoen: function(level) {
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

    setPhysics: function(level, set) {
        if (level == 31) {
            this.requirements["PHYS 31"] = true;
            this.requirements["PHYS 32"] = false;
            this.requirements["PHYS 33"] = false;
        } else if (level == 32) {
            this.requirements["PHYS 31"] = true;
            this.requirements["PHYS 32"] = true;
        } else if (level == 33 && !set) {
            this.requirements["PHYS 33"] = false;
        } else if (level == 33) {
            this.requirements["PHYS 33"] = true;
        } else {
            this.requirements["PHYS 31"] = false;
            this.requirements["PHYS 33"] = false;
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
        
        //if fall has two cores and a blank spot, move coen
        if ((this.numberOfCore("fall") == 2 && this.fall.length < 4) || (this.numberOfCore("fall") == 1 && this.fall.length < 3)) {
            if (this.requirements["COEN 10"] && !this.requirements["COEN 11"]) {
                this.moveCourse("COEN 11", "fall", "winter");
                if (this.numberOfCore("winter") >= this.numberOfCore("spring"))
                    this.moveCourse("COEN 12", "winter", "spring");
            } else if (this.requirements["COEN 10"] && this.requirements["COEN 11"]) {
                this.moveCourse("COEN 12", "fall", "spring");
            }
        } if ((this.numberOfCore("winter") >= 2 && this.winter.length < 4) || this.winter.length <= 2)
            this.winter.push(this.futureClasses.pop());
        if ((this.numberOfCore("spring") >= 2 && this.spring.length < 4) || this.spring.length <= 2)
            this.spring.push(this.futureClasses.pop());

        //if fall has two cores and a blank spot, move coen12
        if (this.numberOfCore("fall") == 2 && this.fall.length < 4 && this.requirements["COEN 11"])
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

    shared: function() {
        //COEN
        if (this.requirements["COEN 10"] == false)
            this.fall.push(courses["COEN 10"]);
        if (this.requirements["COEN 11"] == false)
            this.winter.push(courses["COEN 11"]);
        this.spring.push(courses["COEN 12"]);
        
        //CTW
        this.fall.push(courses["CTW 1"]);
        this.winter.push(courses["CTW 2"]);
    },

    coen: function() {
        this.reset();
        
        // Math
        var studentMathTrack;
        if(!this.requirements["MATH 9"]) {
            studentMathTrack = [];
            studentMathTrack.push(courses["MATH 9"]);
            studentMathTrack = studentMathTrack.concat(this.mathTrackCoen);
        } else if(this.requirements["MATH 13"] && this.requirements["MATH 12"] && this.requirements["MATH 11"]) {
            studentMathTrack = this.mathTrackCoen.slice(3);
        } else if(this.requirements["MATH 11"] && this.requirements["MATH 12"]) {
            studentMathTrack = this.mathTrackCoen.slice(2);
        } else if(this.requirements["MATH 11"]) {
            studentMathTrack = this.mathTrackCoen.slice(1);
        } else {
            studentMathTrack = this.mathTrackCoen.slice(0);
        }
        
        if(this.requirements["AMTH 106"])
            studentMathTrack.splice(studentMathTrack.indexOf(courses["AMTH 106"]), 1);

        studentMathTrack.reverse();
        this.fall.push(studentMathTrack.pop());
        this.winter.push(studentMathTrack.pop());
        this.spring.push(studentMathTrack.pop());

        //Science
        if (this.requirements["CHEM 11"] == false) {
            if (this.chemReplacement == null)
                this.fall.push(courses["CHEM 11"]);
            else if (this.chemReplacement == courses["BIOL 18"])
                this.fall.push(this.chemReplacement);
        } if (this.requirements["PHYS 31"] == false) {
            this.winter.push(courses["PHYS 31"]);
        } if(this.requirements["PHYS 32"] == false) {
            this.spring.push(courses["PHYS 32"]);
        }
        //add future classes if there are a lot of holes
        this.futureClasses.push(courses["COEN 21"]);
        this.futureClasses.push(courses["COEN 20"]);
        this.futureClasses.reverse();
    
        //CTW and COEN
        this.shared();
        
        //COEN 19
        this.spring.push(courses["COEN 19"]);
        
        this.fillHoles();
        this.addENGR1();
    },

    web: function() {
        this.reset();
        
        //Math
        var studentMathTrack;
        if(!this.requirements["MATH 9"]) {
            studentMathTrack = [];
            studentMathTrack.push(courses["MATH 9"]);
            studentMathTrack = studentMathTrack.concat(this.mathTrackWeb);
        } else if(this.requirements["MATH 13"] && this.requirements["MATH 12"] && this.requirements["MATH 11"]) {
            studentMathTrack = this.mathTrackWeb.slice(3);
        } else if(this.requirements["MATH 11"] && this.requirements["MATH 12"]) {
            studentMathTrack = this.mathTrackWeb.slice(2);
        } else if(this.requirements["MATH 11"]) {
            studentMathTrack = this.mathTrackWeb.slice(1);
        } else {
            studentMathTrack = this.mathTrackWeb.slice(0);
        }

        studentMathTrack.reverse();
        this.fall.push(studentMathTrack.pop());
        this.winter.push(studentMathTrack.pop());
        this.spring.push(studentMathTrack.pop());
    
        //add future classes if there are a lot of holes
        this.futureClasses.push(courses["COMM 2"]);
        this.futureClasses.push(courses["COMM 12"]);
        this.futureClasses.reverse();
    
        //CTW and COEN
        this.shared();
        
        //Science
        if (this.requirements["Natural Science"] == false)
            this.fall.push(courses["Natural Science"]);
        
        this.fillHoles();
        this.addENGR1();
    },

    //for debugging
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

    update: function() {
        var i;
        var fallDiv = $('#fall');
        var winterDiv = $('#winter');
        var springDiv = $('#spring');

        fallDiv.html("Fall");
        winterDiv.html("Winter");
        springDiv.html("Spring");

        if(this.currentMajor == 'coen') {
            this.coen();
        } else {
            this.web();
        }

        // populate the fall courses
        //
        $.each(this.fall, function(index, course) {
            var newCourse = document.createElement('div');
            newCourse.className = "courses " + course.subject;
            newCourse.innerHTML = course.name + " - " + course.description;
            fallDiv.append(newCourse);
        });

        // populate the winter courses
        //
        $.each(this.winter, function(index, course) {
            var newCourse = document.createElement('div');
            newCourse.className = "courses " + course.subject;
            newCourse.innerHTML = course.name + " - " + course.description;
            winterDiv.append(newCourse);
        });

        // populate the spring courses
        //
        $.each(this.spring, function(index, course) {
            var newCourse = document.createElement('div');
            newCourse.className = "courses " + course.subject;
            newCourse.innerHTML = course.name + " - " + course.description;
            springDiv.append(newCourse);
        });
    }
};
