(() => {

    const teamPictures = document.querySelectorAll("#teamBio img"),
          bioPic = document.querySelector("#lightBoxPic");

          // fill in your bio info for a name, role and description
    let team = {
        name1: "Tyler Allen",
        role1: "Front-End Developer",
        description1: "In his early years, Ty lived out in the country and often interacted with nature. As he grew he found a love for computers and became interested in coding and eventually web design. Now, Ty uses his web designs skills to help build websites with a focus on a positive environmental impact.",
        name2: "Baek Jieun",
        role2: "Designer",
        description2: "Born in South Korea and studied in various countries. She majored in Tourism a few years ago. Currently studying interactive design at Fanshawe College in Canada. She is inspired by design based on diverse cultural experiences and she enjoys watching a wide range of movies.",
          name3: "Gabriel Eugenio Chavez Portillo",
        role3: "Web Designer & Front-End Developer",
        description3: "Gabriel was born and raised in El Salvador after graduating from high school he moved to Canada to study Interactive Media Design where he is currently studying. He loves to play video games and watch movies until the early morning.",
        name4: "Ashley Cahalan",
        role4: "Co-Owner & Co-Founder",
        description4: "Ashley was born and raised in London, ON. After graduating from Western University, she now studies Interactive Media Design at Fanshawe College. Aside from building her skills in digital design and coding and working on creative projects, Ashley enjoys travelling, hiking and long bike rides."
    };

    function showBioData() {
        let panel = document.querySelector("#bioInfoText").children;
        let imageRef = this.dataset.imageref;

        if (imageRef == 0) {
          panel[0].textContent = team.name1;
          panel[1].textContent = team.role1;
          panel[2].textContent = team.description1;
          document.getElementById("lightBoxPic").src = "images/teamPic0.jpg";
        }

        else if (imageRef == 1) {
          panel[0].textContent = team.name2;
          panel[1].textContent = team.role2;
          panel[2].textContent = team.description2;
          document.getElementById("lightBoxPic").src = "images/teamPic1.jpg";
        }

        else if (imageRef == 2) {
          panel[0].textContent = team.name3;
          panel[1].textContent = team.role3;
          panel[2].textContent = team.description3;
          document.getElementById("lightBoxPic").src = "images/teamPic2.jpg";
        }

        else if (imageRef == 3) {
          panel[0].textContent = team.name4;
          panel[1].textContent = team.role4;
          panel[2].textContent = team.description4;
          document.getElementById("lightBoxPic").src = "images/teamPic3.jpg";
        }

        // let imageRef = this.dataset.imageref;
        console.log("This image is image #", imageRef);
    };

    teamPictures.forEach(button => button.addEventListener("click", showBioData));
})();
