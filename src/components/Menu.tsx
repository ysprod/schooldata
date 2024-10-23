
export type MenuItem = {
  icon: string;
  label: string;
  href: string;
  visible: string[];
}

export const menuItems: MenuItem[] = [
  {
    icon: "/home.png",
    label: "Accueil",
    href: "/admin",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/teacher.png",
    label: "Enseignants",
    href: "/list/teachers",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/student.png",
    label: "Elèves",
    href: "/list/students",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/parent.png",
    label: "Parents",
    href: "/list/parents",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/subject.png",
    label: "Education",
    href: "/list/education",
    visible: ["admin"],
  },
  {
    icon: "/attendance.png",
    label: "Finance",
    href: "/list/attendance",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/calendar.png",
    label: "Messagerie",
    href: "/list/events",
    visible: ["admin", "teacher", "student", "parent"],
  },
];

export const MessagemenuItems: MenuItem[] = [
  {
    icon: "/calendar.png",
    label: "Evenements",
    href: "/list/events",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/message.png",
    label: "Messages",
    href: "/list/messages",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/announcement.png",
    label: "Annonces",
    href: "/list/announcements",
    visible: ["admin", "teacher", "student", "parent"],
  },
];

export const ProfilemenuItems: MenuItem[] = [
  {
    icon: "/home.png",
    label: "Accueil",
    href: "/admin",
    visible: ["admin", "teacher", "student", "parent"],
  },

  {
    icon: "/profile.png",
    label: "Profile",
    href: "/profile",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/setting.png",
    label: "Options",
    href: "/settings",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/logout.png",
    label: "Deconnexion",
    href: "/logout",
    visible: ["admin", "teacher", "student", "parent"],
  },
];

export const EducationmenuItems: MenuItem[] = [
  {
    icon: "/subject.png",
    label: "Matière",
    href: "/list/education",
    visible: ["admin"],
  },
  {
    icon: "/class.png",
    label: "Classes",
    href: "/list/classes",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/lesson.png",
    label: "Leçons",
    href: "/list/lessons",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/exam.png",
    label: "Examens",
    href: "/list/exams",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/assignment.png",
    label: "Assignations",
    href: "/list/assignments",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/result.png",
    label: "Resultats",
    href: "/list/results",
    visible: ["admin", "teacher", "student", "parent"],
  },
];
