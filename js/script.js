M.AutoInit();

document.addEventListener('DOMContentLoaded', () => {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, options);
});