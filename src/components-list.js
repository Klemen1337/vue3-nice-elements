// Add component here to create new route and navigation list item

const components = [
  {
    path: "/",
    name: "home",
    title: "Home",
    icon: "icon-home",
    component: import("@/demo/DemoHome.vue")
  },
  {
    path: "/nice-input",
    name: "nice-input",
    title: "Nice Input",
    icon: "icon-square",
    component: import("@/demo/DemoNiceInput.vue")
  },
  {
    path: "/nice-dropdown",
    name: "nice-dropdown",
    title: "Nice Dropdown",
    icon: "icon-square",
    component: import("@/demo/DemoNiceDropdown.vue")
  },
  {
    path: "/nice-table",
    name: "nice-table",
    title: "Nice Table",
    icon: "icon-list",
    component: import("@/demo/DemoNiceTable.vue")
  },
  {
    path: "/nice-date-range",
    name: "nice-date-range",
    title: "Nice Date Range",
    icon: "icon-calendar",
    component: import("@/demo/DemoNiceDateRange.vue")
  },
  {
    path: "/nice-icon",
    name: "nice-icon",
    title: "Nice Icon",
    icon: "icon-circle",
    component: import("@/demo/DemoNiceIcon.vue")
  },
  {
    path: "/nice-button",
    name: "nice-button",
    title: "Nice Button",
    icon: "icon-square",
    component: import("@/demo/DemoNiceButton.vue")
  },
  {
    path: "/nice-switch",
    name: "nice-switch",
    title: "Nice Switch",
    icon: "icon-toggle-left",
    component: import("@/demo/DemoNiceSwitch.vue")
  },
  {
    path: "/nice-checkbox",
    name: "nice-checkbox",
    title: "Nice Checkbox",
    icon: "icon-check-square",
    component: import("@/demo/DemoNiceCheckbox.vue")
  },
  {
    path: "/nice-no-data",
    name: "nice-no-data",
    title: "Nice no data",
    icon: "icon-folder",
    component: import("@/demo/DemoNiceNoData.vue")
  },
  {
    path: "/nice-loading",
    name: "nice-loading",
    title: "Nice loading",
    icon: "icon-loading",
    component: import("@/demo/DemoNiceLoading.vue")
  },
  {
    path: "/nice-upload",
    name: "nice-upload",
    title: "Nice upload",
    icon: "icon-upload",
    component: import("@/demo/DemoNiceUpload.vue")
  },
  {
    path: "/nice-alert",
    name: "nice-alert",
    title: "Nice alert",
    icon: "icon-alert-circle",
    component: import("@/demo/DemoNiceAlert.vue")
  }
];

export default components;
