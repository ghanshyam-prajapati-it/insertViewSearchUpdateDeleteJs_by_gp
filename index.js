    var main = [];
    var mainLoop = 0;
    var id = 0;
    do
    {
        var choice = parseInt(prompt("Enter your choice:\n\n1. Insert\n2. View\n3. Search\n4. Update\n5. Delete\n6. Exit"));

        if (choice == 1)
        {
            var c = parseInt(prompt("How many profile?"));
            for(var i=0; i<c; i++)   
            {   
                var id = id+1;
                do
                {
                    var nam = prompt("Enter your name:");
                }
                while(nam.length<4);

                do
                {
                    var number = prompt("Enter your number:");
                }
                while(number.length != 10 || isNaN(number) == true);            
                
                var email = prompt("Enter your email:");

                var temp = [id,nam,number,email];
                main.push(temp);
            }            
        }
        else if (choice == 2)
        {
            for(var i=0; i<main.length; i++)
            {
                alert(main[i][0] + ". " + main[i][1] + " - " + main[i][2] + " - " +main[i][3]);
            }
        }
        else if (choice == 3)
        {
            var h = 0;
            do
            {
                var search = parseInt(prompt("You are in search operation.\n\nSearch by : \n1. ID\n2. Name\n3. Number\n4. Email\n5. Exit"));
                if (search == 1)
                {
                    var km = -1;
                    do
                    {
                        var searchId = parseInt(prompt("Enter ID for search."));
                        for (var i=0; i<main.length; i++)
                        {
                            if (searchId == main[i][0])
                            {
                                km = i;
                                break;
                            }
                        }
                        if (km != -1)
                        {
                            alert("Your search data are:\n\nID = " + main[km][0] + " Name = " + main[km][1] + " Number = " + main[km][2] + "Email = " + main[km][3] + "")
                        }
                    }
                    while(km == -1);
                }
                else if (search == 2)
                {
                    var km = -1;
                    do
                    {
                        var searchName = prompt("Enter name for search.");
                        for (var i=0; i<main.length; i++)
                        {
                            if (searchName == main[i][1])
                            {
                                km = i;
                                break;
                            }
                        }
                        if (km != -1)
                        {
                            alert("Your search data are:\n\nID = " + main[km][0] + " Name = " + main[km][1] + " Number = " + main[km][2] + "Email = " + main[km][3] + "")
                        }
                    }
                    while(km == -1);
                }
                else if (search == 3)
                {
                    var km = -1;
                    do
                    {
                        var searchNumber = parseInt(prompt("Enter number for search."));
                        for (var i=0; i<main.length; i++)
                        {
                            if (searchNumber == main[i][2])
                            {
                                km = i;
                                break;
                            }
                        }
                        if (km != -1)
                        {
                            alert("Your search data are:\n\nID = " + main[km][0] + " Name = " + main[km][1] + " Number = " + main[km][2] + "Email = " + main[km][3] + "")
                        }
                    }
                    while(km == -1);
                }
                else if (search == 4)
                {
                    var km = -1;
                    do
                    {
                        var searchEmail = parseInt(prompt("Enter email for search."));
                        for (var i=0; i<main.length; i++)
                        {
                            if (searchEmail == main[i][3])
                            {
                                km = i;
                                break;
                            }
                        }
                        if (km != -1)
                        {
                            alert("Your search data are:\n\nID = " + main[km][0] + " Name = " + main[km][1] + " Number = " + main[km][2] + "Email = " + main[km][3] + "")
                        }
                    }
                    while(km == -1);
                }
                else if (search == 5)
                {
                    alert("Thanks for coming in search operation.");
                    h=1;   
                }
            }
            while(h == 0);
        }
        else if (choice == 4)
        {
            var km = -1;
                    do
                    {
                        var searchId = parseInt(prompt("Enter ID for search."));
                        for (var i=0; i<main.length; i++)
                        {
                            if (searchId == main[i][0])
                            {
                                km = i;
                                break;
                            }
                        }
                        if (km != -1)
                        {
                            alert("Your search data are:\n\nID = " + main[km][0] + " Name = " + main[km][1] + " Number = " + main[km][2] + "Email = " + main[km][3] + "");
                            var te = 0;
                            do
                            {
                                var update = parseInt(prompt("Which data you want to update?\n\n1. Name\n2. Number\n3. Email\n4. Exit"));
                                if (update == 1) 
                                {
                                    do
                                    {
                                        var newName = prompt("Enter new name.");
                                    }
                                    while(newName.length<3);
                                    main[km][1] = newName;
                                }
                                else if (update == 2)
                                {
                                    do
                                    {
                                        var newNumber = parseInt(prompt("Enter new number."));
                                    }
                                    while(newNumber.length != 10 || isNaN(newNumber) == true);
                                    main[km][2] = newNumber;
                                }
                                else if (update == 3)
                                {
                                    var newEmail = prompt("Enter new Email.");
                                    main[km][3] = newEmail;                                                                 
                                }
                            }
                            while(te == 1);
                        }
                    }
                    while(km == -1)
        }
        else if (choice == 5)
        {
            var km = -1;
            do
            {
                var deleteDataId = parseInt(prompt("Which id data you want to delete?"));
                for (var i=0; i<main.length; i++)
                {
                    if (deleteDataId == main[i][0])
                    {
                        km = i;
                        break;
                    }
                }
                if (km != -1)
                {
                    main.splice(km,1);
                }
            }
            while(km == -1);
        }
        else if (choice == 6)
        {
            alert("Thanks for using my system.");
            mainLoop = 1;
        }        
    }
    while(mainLoop == 0);    
