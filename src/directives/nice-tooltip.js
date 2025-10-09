export default (el, binding) => {
  // this will be called for both `mounted` and `updated`
  el.style.color = binding.value

  const tooltipFound = el.querySelector(".nice-tooltip");
  if (tooltipFound) return;

  const tooltip = document.createElement("div");
  tooltip.className = "nice-tooltip";
  tooltip.textContent = binding.value || el.getAttribute("nice-tooltip") || "";
  el.appendChild(tooltip);


  // Show tooltip
  const show = (e) => {
    // if (!tooltip.textContent.trim()) return;
    tooltip.style.display = "block";
    // requestAnimationFrame(() => (tooltip.style.opacity = "1"));
  };

  // Hide tooltip
  const hide = () => {
    tooltip.style.display = "none";
    // tooltip.style.opacity = "0";
    // setTimeout(() => (tooltip.style.display = "none"), 150);
  };

  // Bind events
  el.addEventListener("mouseenter", show);
  el.addEventListener("mouseleave", hide);

}

// export default {
//   mounted(el, binding) {
//     console.log(binding)
//     // Tooltip element
//     const tooltip = document.createElement("div");
//     tooltip.className = "nice-tooltip";
//     tooltip.textContent = binding.value || el.getAttribute("nice-tooltip") || "";
//     document.body.appendChild(tooltip);

//     // Optional: remove the browser’s default tooltip
//     el._originalTitle = el.getAttribute("tooltip");
//     el.removeAttribute("tooltip");

//     // Show tooltip
//     const show = (e) => {
//       if (!tooltip.textContent.trim()) return;
//       tooltip.style.display = "block";
//       move(e);
//       requestAnimationFrame(() => (tooltip.style.opacity = "1"));
//     };

//     // Move tooltip with cursor
//     const move = (e) => {
//       tooltip.style.left = e.pageX + 10 + "px";
//       tooltip.style.top = e.pageY + 20 + "px";
//     };

//     // Hide tooltip
//     const hide = () => {
//       tooltip.style.opacity = "0";
//       setTimeout(() => (tooltip.style.display = "none"), 150);
//     };

//     // Bind events
//     el.addEventListener("mouseenter", show);
//     el.addEventListener("mousemove", move);
//     el.addEventListener("mouseleave", hide);

//     // Cleanup
//     el._tooltipCleanup = () => {
//       el.removeEventListener("mouseenter", show);
//       el.removeEventListener("mousemove", move);
//       el.removeEventListener("mouseleave", hide);
//       tooltip.remove();
//       if (el._originalTitle) el.setAttribute("tooltip", el._originalTitle);
//     };
//   },

//   updated(el, binding) {
//     // Update tooltip text if value changes
//     const tooltip = document.querySelector(".nice-tooltip");
//     if (tooltip) tooltip.textContent = binding.value || el.getAttribute("tooltip") || "";
//   },

//   unmounted(el) {
//     if (el._tooltipCleanup) el._tooltipCleanup();
//   },
// };
