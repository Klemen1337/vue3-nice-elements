// Add component here to create new route and navigation list item

const components = [
  {
    path: "/",
    name: "home",
    title: "Home",
    component: import("@/demo/DemoHome.vue")
  },
  {
    path: "/nice-input",
    name: "nice-input",
    title: "Nice Input",
    component: import("@/demo/DemoNiceInput.vue")
  },
  {
    path: "/nice-table",
    name: "nice-table",
    title: "Nice Table",
    component: import("@/demo/DemoNiceTable.vue")
  },
  {
    path: "/nice-date-range",
    name: "nice-date-range",
    title: "Nice Date Range",
    component: import("@/demo/DemoNiceDateRange.vue")
  },
  {
    path: "/nice-icon",
    name: "nice-icon",
    title: "Nice Icon",
    component: import("@/demo/DemoNiceIcon.vue")
  },
  {
    path: "/nice-button",
    name: "nice-button",
    title: "Nice Button",
    component: import("@/demo/DemoNiceButton.vue")
  },
  {
    path: "/nice-switch",
    name: "nice-switch",
    title: "Nice Switch",
    component: import("@/demo/DemoNiceSwitch.vue")
  },
  {
    path: "/nice-checkbox",
    name: "nice-checkbox",
    title: "Nice Checkbox",
    component: import("@/demo/DemoNiceCheckbox.vue")
  },
  {
    path: "/nice-no-data",
    name: "nice-no-data",
    title: "Nice no data",
    component: import("@/demo/DemoNiceNoData.vue")
  },
  {
    path: "/nice-loading",
    name: "nice-loading",
    title: "Nice loading",
    component: import("@/demo/DemoNiceLoading.vue")
  }
];

export default components;
