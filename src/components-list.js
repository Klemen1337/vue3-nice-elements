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
  }
];

export default components;
