import Icons from "../contants/icons";
export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        iconSrc: Icons.htmlLogo,
        name: "HTML5",
      },
      {
        iconSrc: Icons.cssLogo,
        name: "CSS3",
        frameworks: [
          { iconSrc: Icons.bootstrapLogo, name: "Bootstrap" },
          { iconSrc: Icons.tailwindLogo, name: "Tailwind CSS" },
        ],
      },
      {
        iconSrc: Icons.jsLogo,
        name: "JavaScript",
        frameworks: [
          { iconSrc: Icons.reactLogo, name: "React" },
          { iconSrc: Icons.reactLogo, name: "React Native" },
        ],
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        iconSrc: Icons.jsLogo,
        name: "JavaScript",
        frameworks: [{ iconSrc: Icons.nodeJsLogo, name: "Node JS" }],
      },
      {
        iconSrc: Icons.databaseLogo,
        name: "Databases",
        frameworks: [{ iconSrc: Icons.databaseLogo, name: "MySQL" }],
      },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      {
        iconSrc: Icons.reactLogo,
        name: "React Native",
      },
      {
        iconSrc: Icons.flutterLogo,
        name: "Flutter",
      },
      {
        iconSrc: Icons.javaLogo,
        name: "Java",
        frameworks: [{ iconSrc: Icons.javaSwingLogo, name: "Java Swing" }],
      },
    ],
  },
];
