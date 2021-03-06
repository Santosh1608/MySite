const initialState = {
  teams: [
    {
      id: 1,
      team: "Management Team",
      access: "All Access",
      total: "4",
      color: "#27AE60",
      backColor: "rgba(39, 174, 96, 0.3)",
      Last_updated: "1 min ago",
      show: false,
      Access_control: [
        {
          id: 1,
          name: "Budget",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 2,
          name: "Bidding",
          access: "Restricted actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 3,
          name: "Vender",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 4,
          name: "Work Order",
          access: "Restricted Actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 5,
          name: "Profile",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 6,
          name: "Permissions",
          access: "No actions",
          Summary: "-",
          Last_updated: "1 min ago",
          color: "#BDBDBD",
          backColor: "#F2F2F2",
          toggle: false,
        },
      ],
    },
    {
      id: 2,
      team: "Procurement Team",
      access: "Restricted Access",
      total: "8",
      color: "#FF0808",
      backColor: "rgba(255, 8, 8, 0.3)",
      Last_updated: "1 min ago",
      show: false,
      Access_control: [
        {
          id: 1,
          name: "Budget",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 2,
          name: "Bidding",
          access: "Restricted actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 3,
          name: "Vender",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 4,
          name: "Work Order",
          access: "Restricted Actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 5,
          name: "Profile",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 6,
          name: "Permissions",
          access: "No actions",
          Summary: "-",
          Last_updated: "1 min ago",
          color: "#BDBDBD",
          backColor: "#F2F2F2",
          toggle: false,
        },
      ],
    },
    {
      id: 3,
      team: "Project Team",
      access: "Restricted Access",
      total: "4",
      color: "#FF0808",
      backColor: "rgba(255, 8, 8, 0.3)",
      Last_updated: "1 min ago",
      show: false,
      Access_control: [
        {
          id: 1,
          name: "Budget",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 2,
          name: "Bidding",
          access: "Restricted actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 3,
          name: "Vender",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 4,
          name: "Work Order",
          access: "Restricted Actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 5,
          name: "Profile",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 6,
          name: "Permissions",
          access: "No actions",
          Summary: "-",
          Last_updated: "1 min ago",
          color: "#BDBDBD",
          backColor: "#F2F2F2",
          toggle: false,
        },
      ],
    },
    {
      id: 4,
      team: "It Team",
      access: "Restricted Access",
      total: "14",
      color: "#FF0808",
      backColor: "rgba(255, 8, 8, 0.3)",
      Last_updated: "1 min ago",
      show: false,
      Access_control: [
        {
          id: 1,
          name: "Budget",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 2,
          name: "Bidding",
          access: "Restricted actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 3,
          name: "Vender",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 4,
          name: "Work Order",
          access: "Restricted Actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 5,
          name: "Profile",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 6,
          name: "Permissions",
          access: "No actions",
          Summary: "-",
          Last_updated: "1 min ago",
          color: "#BDBDBD",
          backColor: "#F2F2F2",
          toggle: false,
        },
      ],
    },
    {
      id: 5,
      team: "Super Admin",
      access: "All Access",
      total: "4",
      color: "#27AE60",
      backColor: "rgba(39, 174, 96, 0.3)",
      Last_updated: "1 min ago",
      show: false,
      Access_control: [
        {
          id: 1,
          name: "Budget",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 2,
          name: "Bidding",
          access: "Restricted actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 3,
          name: "Vender",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 4,
          name: "Work Order",
          access: "Restricted Actions",
          Summary: "View|Create",
          Last_updated: "1 min ago",
          color: "#FF0808",
          backColor: "rgba(255, 8, 8, 0.3)",
          toggle: false,
        },
        {
          id: 5,
          name: "Profile",
          access: "All access",
          Summary: "View|Create|Edit|Delete",
          Last_updated: "1 min ago",
          color: "#27AE60",
          backColor: "rgba(39, 174, 96, 0.3)",
          toggle: false,
        },
        {
          id: 6,
          name: "Permissions",
          access: "No actions",
          Summary: "-",
          Last_updated: "1 min ago",
          color: "#BDBDBD",
          backColor: "#F2F2F2",
          toggle: false,
        },
      ],
    },
  ],
  showTeam: null,
  showTeamName: null,
  model: false,
};
const TeamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SHOW":
      const team = state.teams.find((team) => team.id == action.id);
      return {
        ...state,
        showTeam: team.Access_control,
        showTeamName: team.team,
      };
    case "CHANGE_TOGGLE":
      let showTeam = [...state.showTeam];
      showTeam = showTeam.map((team) => {
        if (team.id == action.id) {
          team.toggle = !team.toggle;
          console.log(team.toggle);
          return team;
        }
        team.toggle = false;
        return team;
      });
      return { ...state, showTeam: showTeam };
    case "REMOVE_SHOWTEAM":
      return { ...state, showTeam: null };
    case "CHANGE_MODEL":
      console.log(state.model);
      return {
        ...state,
        model: !state.model,
      };
    default:
      return state;
  }
};

export default TeamsReducer;
