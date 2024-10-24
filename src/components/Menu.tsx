
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
    href: "/teachers",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/student.png",
    label: "Elèves",
    href: "/students",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/parent.png",
    label: "Parents",
    href: "/parents",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/subject.png",
    label: "Education",
    href: "/education",
    visible: ["admin"],
  },
  {
    icon: "/attendance.png",
    label: "Finance",
    href: "/attendance",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/calendar.png",
    label: "Messagerie",
    href: "/events",
    visible: ["admin", "teacher", "student", "parent"],
  },
];

export const MessagemenuItems: MenuItem[] = [
  {
    icon: "/calendar.png",
    label: "Evenements",
    href: "/events",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/message.png",
    label: "Messages",
    href: "/messages",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/announcement.png",
    label: "Annonces",
    href: "/announcements",
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
    href: "/education",
    visible: ["admin"],
  },
  {
    icon: "/class.png",
    label: "Classes",
    href: "/classes",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/lesson.png",
    label: "Leçons",
    href: "/lessons",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/exam.png",
    label: "Examens",
    href: "/exams",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/assignment.png",
    label: "Assignations",
    href: "/assignments",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/result.png",
    label: "Resultats",
    href: "/results",
    visible: ["admin", "teacher", "student", "parent"],
  },
];
