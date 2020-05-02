interface Skill {
  nome: string;
  color: string;
}

const Skills: { [key: string]: Skill } = {
  php: {
    nome: "PHP",
    color: "blue1"
  },
  javascript: {
    nome: "JavaScript",
    color: "yellow4"
  },
  nodejs: {
    nome: "NodeJS",
    color: "green1"
  }
};

export default Skills;
