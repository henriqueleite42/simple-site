import { Language as LanguageInterface, Lang } from "../Interfaces/Language";

const EN: Lang = {
  nav: {
    profile: "Profile",
    messages: "Messages",
    jobs: "Jobs",
    analytics: "Analytics",
    courses: "Courses",
    notifications: "Notifications",
    settings: "Settings"
  },
  profile: {
    name: "Name",
    level: "Level",
    headline: "Headline",
    editInfo: "Edit Info",
    balance: {
      available: {
        short: "Balance A.",
        complete: "Balance Avaliable"
      },
      receivable: {
        short: "Balance R.",
        complete: "Balance Receivable"
      }
    },
    jobs: {
      short: "Jobs",
      complete: "Total Jobs Done"
    }
  },
  chat: {
    notSelected: "Choose a Chat"
  },
  jobs: {
    searchBar: "Search for Projects"
  },
  login: {
    signIn: "Sign In",
    signUp: "Sign Up",
    signOut: "Sign Out",
    firstName: "First Name",
    lastName: "Last Name",
    email: "E-mail",
    password: "Password",
    youAreHereTo: "I want",
    hire: "To Hire",
    work: "To Work"
  },
  settings: {
    tabs: {
      general: "General"
    },
    general: {
      language: "Language",
      theme: "Theme",
      themeDark: "Dark",
      themeLight: "Light"
    }
  }
};

const BR: Lang = {
  nav: {
    profile: "Perfil",
    messages: "Mensagens",
    jobs: "Trabalhos",
    analytics: "Relatórios",
    courses: "Cursos",
    notifications: "Notificações",
    settings: "Configurações"
  },
  chat: {
    notSelected: "Escolha Um Chat Ao Lado"
  },
  profile: {
    name: "Nome",
    level: "Nivel",
    headline: "Titúlo",
    editInfo: "Editar Informações",
    balance: {
      available: {
        short: "Saldo D.",
        complete: "Saldo Disponivel"
      },
      receivable: {
        short: "Saldo R.",
        complete: "Saldo a Receber"
      }
    },
    jobs: {
      short: "Projetos",
      complete: "Total de Projetos Concluidos"
    }
  },
  jobs: {
    searchBar: "Pesquise por Projetos"
  },
  login: {
    signIn: "Entrar",
    signUp: "Cadastrar-se",
    signOut: "Sair",
    firstName: "Nome",
    lastName: "Sobrenome",
    email: "E-mail",
    password: "Senha",
    youAreHereTo: "Eu pretendo",
    hire: "Contratar",
    work: "Trabalhar"
  },
  settings: {
    tabs: {
      general: "Geral"
    },
    general: {
      language: "Idioma",
      theme: "Modo",
      themeDark: "Escuro",
      themeLight: "Claro"
    }
  }
};

const Language: LanguageInterface = {
  EN: EN,
  BR: BR
};

export const AllLangs = {
  EN: "English",
  BR: "Porguês (Brasil)"
};

export default Language;
