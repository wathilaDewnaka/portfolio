import blog from "../data/blog.png"
import weather from "../data/weather.png"
import hunger from "../data/zero-hunger.png"
import portfolio from "../data/portfolio.png"
import grocery from "../data/image.png"

export const MyDetails = {
    name: "Wathila Karunathilake",
    roles: [
      "Full Stack Developer",
      "Software Engineer",
      "Software Developer",
      "Web Developer",
      "UI/UX Designer",
      "Programmer",
    ],
    description:
      "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    
  };
  
  export const skills = [
        {
          name: "MERN Stack",
          image:
            "https://www.tridentspark.com/wp-content/uploads/2023/07/mern-stack-icon-1.png",
        },
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
          name: "Tailwind CSS",
          image: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png"
        },
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
        },
        {
          name: "Express Js",
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEWCgoL////l5eXk5OTm5ubu7u74+Pj19fXx8fH7+/vr6+t+fn52dnZ7e3t8fHzz8/OGhoaTk5Pa2tq3t7e7u7utra3Q0NCZmZnFxcWkpKSMjIzKysqpqanX19e/v7+dnZ1ra2tH/Sn9AAASPElEQVR4nOVdbZuyKhBWwTcErcxqa7fO//+VB9RKGF6tdvWc+bLPNY+m48DMzc0AURzHWYKTjP9FOEn5nzTBaKJNPLW5UYtxQozawqYtH1o8V4ui/4eFKEG9hcn4fgmaqU2S0ZaHNndpi0Fbjlr8Ni0atVGWZXmapjn/y/8U/E/B//6etnmnttFoI/4BemcgxUVBWuLS8iaES/6XENLwPw1vSpPPngzXPj67TYtDtIhrI6ztZm/pkuKZDbcpLgt0uV73+7b74tJ1bdterztUZDgl5Se6JJpoP+ZD/uNNnKNTdztHlFJWV7LUjCuj8609oIx/hfRzPvxI3yqanBzaIzeNGxbZpKq4pdG2PeBcdKKXepyhH747lgotut4iyuymKYYyGt1O6aRpvi+WvrXzYZKSXbehDscZrKxp1F1wms7sfNZ8iAa/oLGbIeSjJRrt9RjmO+hLtj31HkDD+6GhS6Kxm3losaKNAs0yG9uQ042+Yt1dano8lS+ahT6QLUjH2BvMG42sOxKTt2WLV8MLwqT42b7FfU+p6PYkUunrQSd6PUU0pK3e576nsKgl8euJQ84W4ck/IWj/UmyxScW+EQlO/gi9M1vkqPuYfYONXfGWbDHbh+1H7Rts3AdCNUX7Qj/M8lNUf9g+IXV0KssX+uH8WIo2n4gvOmFnFAjVprF0bj7Mvukv2SeEfudkbj6cBdUScnhz/nMJ745kHoCbh0uz2286cBB2K3NvqDbFpeHZAse/7cBBKnpKfZvmS1wbSY6/78BB2FGid/wAXPAYvznMGvy9R6rqEH+Ya0ua6185cBDaEm1eQO/i2vDxt3KgSdgRuUmA2Vwb2W3+roXepdqgIAAX0g/zw187cBB2yD/DtaXt33bBp/DO6IBqs0ZP6dcyPCiEfZXeAM4b0xTH3xhH+Aq72aHaFNP4RRqcnP8+xkylOqO3ZguMFhBEZRlCqgmqhXJtJdr8tUE6yd/GtZVkaQ4cJS0n75tqE0fqw7VhtFADo2j3Fq4NL7OJ9rJ5C9eWLNdAHlHdAM7ZD/OFpQlZqm2hQrU8kGtLj0s2kJt4dAE4Rz5Mv5aEZHRS6wCcP9eWt8vBoiahJzuAs0YacljKaMIm9IKtkcaWLXbL96AQtsMWAGcZHyZ4wXlCkk0410Z6Vm3hYfQp1TZWoJoX19Zc19FGhbCOhI+e8M8aosxd6CGYa8PJX790mFTBXFu8mk44SHUsIdeW27i2VWTCqdALCeHakmxtBnITrflQ5drIbV1ttJctCeDaVtdGhdCDPtLossUK26gQmjW+XNv3Ctsol+o7s3NtZEwcGVqnC7kTf0YriJ1ry9cCuKGc/bi203rwqCrs4sW1/fVrviKVB9fWtEtnZmxSt42La0vQetuoELZzcW2kW2emuEvVObm2dbtQpH0719bs1+1CkfaJbWyBydpdyIONNVuQdu0u5E5sCeTaSErEGJ+kxfoN5CYWI9c2ADh59PQT3EjF4roqOh+3x/OG/5u5y/oAJvT9qup1GwO6ZD+xmWvbej5sfCSj5/ZARAMfJCM/+1tlLz5lRawI8QP61Zd649Fw5TZOTFyb57PGV2VfP6X6UCGojay/A27wI2Yr9TbjrBFFyXQEnOcj15ZnTUC2p+eDzrpRdluzjdAX8dbjuTRRbjLzuVVX5gPXlitcm3+qoEdksa935Nn4Y/SiXty42w5rlXtyy8uy2JAPfYdNbLNz2CfkZHxtmqrXXpxPPqu32PzODgau7eZnIL162Ce+4tk0StmAa13tlKrxyTp1W91kru1BknrFmaqv8PCTzvCL9bd6pYP7omqn3zmuR4lubHH1iTMUxgmLXAwvAt7YEjciTXDKHK262uPHngVPH6am9CK92j7EQPO3Zo16pY2DBoni7HrPSYUGH+OTYYzvkwxhGJxrIogcpZlaoGrgdtdPUJJDrs1j0h42LrcYmh+I/uauBS51dML+nl0Os4U73fd1HUDK5HDat/vrAWW6/zZlDQoyjomHVt1ty4R3qbocjp6cLCnr4Ovj9nzf1YND8HOrAg8hX/o3ZwDy6R8LEoUPAoo2mcy1cZDjJLqrLXj3n7OCsistmNN/O/h72lcAXd+viIlibpTEtRVO+oKpjRCddW+kATzY0BUBcuhgtBHJWxKPTtj/uPgwUj5sDG3pIaDfGFdfwJRpYA5AjNRkgUppy65M+LhPgAqJa8t97phIaUbWfKiqAk/TtaqFIGOBj+DVCe+/PeXasCsbKnGhtI/M1RczLCcCTTDeyxeCRLH3H/7s5P3asGNJk9pnXNQDxfL1hkANEYTcTtVE4dkJhdQnOVs4SbbQtkJlWGYigKgK49OpDWqi8O2EQqqWTLk20thBKZNzgE/AVj6/6TIwkJoMUoGH/Tshl2Mjc232q2Xo6zXMUrrQyQA71Qg2YcNALw0s55W5Nvv4rJZ7oRPZ9yI3sdKYW1SIkN+vVEFPQCfsfziXuDY7oqH59EmepSiKC4zVDwCVjYNKNR6XgVwuv//OteV52pgake5d/VyoRhHz0AUMpPqSOpAoQgvt6lPT2zbEUvusIZPgjHdjUbqY0UKA6HtvqXYH19RX3VAbPeRDYiWhqPQoF7ybvLrnffRHsYb3AzWNzKiAuZGnhYjYWp7Ckvh/Sya9uYUxrKV+Lr6GmihCO6GQ82jhEEttV9bSwDcgolVS80vNN4KBVKkmiqBMeJfp2MIYy4XIDSZkklhOo5YLmYPg8oej0x8tJ1xbYbNQ7k4hdZkydLPdCQdSU5lXhkaLwYeEkKK0/sRRelpISZgchK3eB4ThRLJ5FT4MpYSk5RBLbfMGlZyYgibgpHhhnX6t5O8oycyS8/7pYyzFV8tXklF3wzb+EkndyxJqxGO0RJ6Ques+6v3UQttEjmsizVcsnK8QMJAaZXYtaHWNH1xbaesicC5srji6MJyR6r/L7OKJ6ppz2/IhllotfJeBrioBzeRwPLsTit/bk2c+tI3w32ehk87TcK0vLL7iFj65Nhvwrt9mobMcSdMVZ9snIBV5cG3E9nX13WOOOOGQpp3aA7D718ZY+ksWWgeh/TvpbpptYj+svVtoA1RggDpbXPUIeug2O9TcLRR8VGHz4fv6ocNCOKXYiyONWiz8ikWx3sDT2CIN0z53loX2dzU1lrkp/x5p+mxhs1DOFqL8dqZgeywFjNRDunkZo+rSJ9dmzYfSAJz8Q2eL3UDLDLov96VYyDP+nWtrbBYyaQrihehtfx0wSfPyQ6s2e3Bt1vYjD/I+ZqHFQHNdjv0nReTyGVvINI2V75gvgP5VTJyz4vM+thgstI2AZTrzIxaqiaJQYcacEUY9+rCPpdZamvkshreoiWILaq9mpAy2688eGCy03i8nRJ/asFBRh6AnBkF4+D4yFBFPrk1OVB9YNaTSv31BLcj/wSmDNhOuzTq55k1dzxSQKHpbAIXqUUgsC82eXBvC1jeQwkBQtbuXqIliDHugnQanjOnMTGptAnKDmWuISdRCnUfGBe00MGWcpZkZ+9yTVA0V0hHZVAyXqCOKs/F/Aj/ubfRhURRNXlpBsdwRDTVc2hsvu4noiSjVU5MpCrVkJSxlVG3JbbtzbaaSnvFamVzwX1gj5xntJWqikLu56sSQGRp2kOra7F9HflP/SWDpy2hDFFMLSqSAUIN6z4BlS2Ief1LXZq/FkJup92PkGKJjaUCiUJwEeI2AlMGjx7OuLcHEfrUM3HzHFzK41IEhlSGBfVx1YsCeJESU85bJ3UI7GFN6ix//JY9pdRVboKITJK0KtFPvMoIjCalrUx/ks5uiMl+mwUKgm2mwJ+TfPA2c1rWVOQc3jtpEqtQS+MyrO9wDE4U+D6kW+i3t4TFMrCEts0ddmyPLgfIz5wkClVw0rQnAYFJLOzCD8dQvZYgZdmkNqatGGGRf05qm0b6NUhUO469viTpsp36xPFbWkDYu0AdQ4o/lMCtQ6g1dCBKFOSWrT8492ulQ5/3g2ji4yVyTCrCyPm4N/CCLADMIG6Baom4mD2A79UgZ9bXhiE3Y9lhR4kxymqmvvGPAkRWN4Iw83C8Flv5b1j2B9Q3ulEF3GKwKchMwunXNh+/oeRJuzejmW7O+FDZA4BcrbAT+dqeMTQbXkDpHRZpFM4Mnd5e9OMq42192aoFaLw0MIaBX258M5hVdA5yqfZwNxWMp7tcfYjc9UQetrnwKbB2gxTs+L2ynjtlvdhlOXcaTNaQYu9MMm2Ui3BAcLIJzDvzgMjA75mDJzDWkzDa7oJccLs2AcxTOB8Nb7CsTpmtIB66tLEjqnITmUp/1iwyNomsZteoQD2IEVNlaU0Z9SnNu1IRrG3Yc8Bsx+KzFf4huFAJ+wWtIDdvptyW/GHYc8FuPT8EKCaPkuhPaYAL3eqxm+s2Y3/r1+LodeDz3VKgA9WCQkxbzgEThSd7BdmpMGYKTePqw59rynGOcwrsmgG08ljxfIu0HA4nCm/aB7dSUMmg+GDXl2ob92vypUFZdtcn9LunecAgySBT+82bem6KIzbAM+7WFMPbifHBDvSQ+Gc+whoWyATuJwnaqJ9Aowsb92sL2GKppddwfyMSZOTmITYYsrV19x6DFTGApcqzdXm4bg/3a7uePkfBtL8UidVZtztvteRP1/7b65HzcyhL2tI1y91aHUtipX7rN/RhPuLZxvzYHqbgS+d/t11aWgmsjOf/L/6Tr33OPCahWlg23JisnXNu42/VaN0l+ipjPtZ6N8B/Z+9JyNgJZuRN7jk3esXzk2sY/Ta6hHNYkrCgGa5pC5dri+9kItvUzi5f66nM2wpqbaeV1NsLa9/NWz0Z4cG09yBFbZJTzClaXIBsyQjWMn7EUno1gX424ZKE/WDkbQbPbNcK8wfov116UiLMR7hYihWsry4L/fQA4n920Figsf0C1Jwwt5WwxJn+yosOsnsLGrQS9ziFNV3nOTBpyDumHyrk/KfTR+RQfTri2CYDLV5cU2amUrNBzbRN3ktWd2dXEmlPJrOeQ/vU7B0oSfA4pXtWZT/ez80znkHJbe65NAnAzquP/TEQZhQTVjFybfJjHarpiP/8uQTWQLTDSWJgs+bxqSTYAqk0tlLk2CcClazlLFqUqVDNzbUryX0W0EdMZKlTzOYc0WdWZzrZTq60+TMnX0k1kw7ncifkcUhnkKACuycuFY/DqFuugmpVrUwEcLIdZkFRnPVTzPZd7mHNbcs7YTDpfEnIOqQzg/toMi5igmoVrGwGcpHXVD/+dZCXWQjVs59pgg13qIUm5Eaq5uDbVwnKJDbXiBhqhmotrgwAOb5bmxuqMSzNUc3FtcvIf4s/CkoZIExaoFpYtBm0xa3PGT0l9hHnBmi2sPrwDuNtyABy7OaCamWtrLAAu3i9lpEH3LqjmwbWNWtmd12WYKBbFOaCaF9em0ZKfJfTFeufufD5cm1aLkfGUqt8Sdu7fzAHVDFybB4CLy++/bam0Hd5MhmpYhWoTrSVbID0D9/5tIwKk3yzHA6r5cW0GLbEci/dhYVuEVVCmh2qeXJsEiCba8o/SBt0X/Ttk2jcL5dqQTUt2f+BGdu6PzEy8oJo316YHcFxL9HX4n5OKtinW5AWPbGHn2sza/PabTZXeUqIHZU5tZIRqDm2TGZYbfEBYdMkAiNRDS6jVcW2q4wzaIr5algK/Typ2JcQIyt7BtVm0PP9/2saKdplf53uBazNoxe/ku9tHbazokUwDqATK9FoL1yaSKYRqd21u0hZfH7OR+6+IG/AOE1DmAeAgE2UBcIlWS1BHPxFzatohXQbwgWqhXJtdy7Njetm82ZEV3Vwx8QBl7+LaTADufm0c777e6EhGv3ZxagNlZqimal+MNA9tgsv4YFzQFSQ8uhxSgsNjiiHSvJQtplrx62i/pS/lyKqm22s2Ly+8zLX5aHmXJGKXhXqOlVXFou6EyDCE9wVl7+HaQrR5nmXodItYkJUVo9HtuhNbbweCMqfWiLyDAJxGuzt9b/stM5ztkhu37U48WDV4Bih7L9cW0iV5b2jiHJ262zmilD12B6meu4RQGp2P3QWJ0Jc+u87zF5LZnW821+YVViVtI5Ja2aDLdb/ft93X7fbVdW3b7q871GT8P6VRrQcoCw6req5tJoC7ayGk6ktXSJ/BY5KSHgoRy7VWUBYG4KxMVBCAy21aArVyI9RrZ0O1l7g2K4BLVG0+aIlR+yoo+wjX9prWC369rn0AuE9HmlTu+3rtRyPNv+c/cIe0nzmlAAAAAElFTkSuQmCC",
        },
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        {
          name: "PHP",
          image: "data:image/png;base64,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"
        },
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          name: "Firebase",
          image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
        {
          name: "Java",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "Git",
          image:
            "https://p1.hiclipart.com/preview/678/218/574/logo-logo-git-line-cheat-sheet-signage-cheating-mug-png-clipart-thumbnail.jpg",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://w7.pngwing.com/pngs/877/217/png-transparent-postman-logo-tech-companies-thumbnail.png",
        },
        {
          name: "Adobe XD",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zybJXD1LEQ5DsQyvbXXqU_oNIN_c_-x_Q08EdS45kQ&s",
        },
        {
          name: "Figma",
          image:
            "https://w7.pngwing.com/pngs/684/413/png-transparent-figma-logo-thumbnail-tech-companies-thumbnail.png",
        }
      ]
  
  export const education = [
    {
      id: 0,
      school: "University of Westminster",
      date: "Sep 2023 - Present",
      grade: "Currently Educating",
      desc: "I am currently pursuing a Bachelor's degree in Software Engineeting at University of Westminster (IIT). I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
      degree: "BEng in Software Engineering",
    },
    {
      id: 1,
      school: "Informatics Institute of Technology (IIT Campus)",
      date: "Sep 2022 - Sep 2023",
      grade: "Distinction - 76% Overal",
      desc: "I completed my foundation in Computer Science at IIT Sri Lanka with Distinction. Obtained good foundation knowledge about information technology and mathematics from here.",
      degree: "Foundation Certificate in Higher Education",
    },
    {
      id: 2,
      school: "Vidura Collage",
      date: "Jan 2011 - May 2022",
      grade: "7A 1B 1C",
      desc: "Completed by Ordinary Level education in English medium at Vidura Collage Colombo. In my school life i participated in many Exibiions and even i was able to obtain first place at our school Computer Day (Certificate Awarded by Vega Innovations)",
      degree: "General Certifcatte Education - Ordinary Level",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Blog Website",
      date: "Apr 2024 - Apr 2024",
      description:
        "Created a simple blog app using ReactJS. I have used ReactJS and Bootstrap to this project. I used JSON server to do CRUD operations. This project helped me to get good idea about ReactJS, Bootstrap and JSON Server.",
      image: blog,
      github: "https://github.com/wathilaDewnaka/blog-web",
      webapp: "null",
    },
    {
      id: 1,
      title: "Portfolio Website",
      date: "May 2024 - May 2024",
      description:
        "Created a portfolio site using ReactJS to showcase my projects and skills. I have used ReactJS and Bootstrap to this project. Used JSON file to store data. Mobile responsive site. This project helped me to get good idea about ReactJS, Bootstrap and JSON Files.",
      image: portfolio,
      github: "https://github.com/wathilaDewnaka/portfolio",
      webapp: "https://wathiladewnaka.github.io/portfolio/",
    },
    
    {
      id: 2,
      title: "Weaher Website",
      date: "Mar 2024 - Mar 2024",
      description:
        "Created a whether tracking website using ReactJS. I have used OpenWeatherAPI to fetch the data. This project helped to gain knowledge of working with ReactJS, Bootstrap and fetching the data with API.",
      image: weather,
      github: "https://github.com/wathilaDewnaka/blog-web",
      webapp: "https://wathiladewnaka.github.io/wheather-app/",
    },
    
    {
      id: 3,
      title: "Zero Hunger Website",
      date: "Mar 2024 - Apr 2024",
      description:
        "Created Shopping Page, Checkout Page, Page Editor, Splash Screen, Content Page Main and Sub Content Page for this website related to Zero Hunger. This website is base on a theme to donate poor people with foods and groceries. Created with HTML, CSS and JavaScript.",
      image: hunger,
      github: "https://github.com/wathilaDewnaka/zero-hunger-website",
      webapp: "https://wathilaDewnaka.github.io/zero-hunger-website",
    },
    {
      id: 3,
      title: "GroceryOne - Management System",
      date: "Mar 2024 - Mar 2024",
      description:
        "Created a management system which can be used to manage orders for greocery shop. Used Java Swing for GUI. Used LinkedList and OOP knowledge to do this project.",
      image: grocery,
      github: "https://github.com/wathilaDewnaka/GroceryOne-Application",
      webapp: "null",
    }
  ];
  
